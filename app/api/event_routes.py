from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Calendar, Event
from app.forms import EventForm
import requests
import os
from datetime import timedelta

event_routes = Blueprint('event', __name__)

#EVENTS
@event_routes.route('/new/<calendarId>', methods=['POST'])
@login_required
def add_event(calendarId):
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newEvent = Event(
            title=form.data['title'],
            description=form.data['description'],
            location=form.data['location'],
            category=form.data['category'],
            startDate=form.data['startDate'],
            startTime=form.data['startTime'],
            color=form.data['color'],
            editable=form.data['editable'],
            venue=form.data['venue'],
            image=form.data['image'],
            userId=current_user.id,
            calendarId=calendarId
        )
        db.session.add(newEvent)
        db.session.commit()
        calendar = Calendar.query.get(calendarId)
        return {"calendar": calendar.to_dict(), "event": newEvent.to_dict()}


@event_routes.route('/edit/<eventId>', methods=['PUT'])
@login_required
def edit_event(eventId):
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        editEvent = Event.query.get(eventId)
        editEvent.title=form.data['title'],
        editEvent.description=form.data['description'],
        editEvent.location=form.data['location'],
        editEvent.category=form.data['category'],
        editEvent.startDate=form.data['startDate'],
        editEvent.startTime=form.data['startTime'],
        editEvent.color=form.data['color']
        db.session.commit()
        calendar = Calendar.query.get(editEvent.calendarId)
        return {"calendar": calendar.to_dict(), "event": editEvent.to_dict()}

@event_routes.route('/delete/<eventId>', methods=['DELETE'])
@login_required
def delete_event(eventId):
    delEvent = Event.query.get(eventId)
    calendarId = delEvent.calendarId
    db.session.delete(delEvent)
    db.session.commit()
    calendar = Calendar.query.get(calendarId)
    return {"calendar": calendar.to_dict()}


@event_routes.route('/getformulaone/<type>')
@login_required
def get_formulaone(type):
    headers = {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': os.environ.get('FORMULA_KEY'),
    }

    params = {'type': type, 'season': '2022', 'next':'10'}

    response = requests.get('https://api-formula-1.p.rapidapi.com/races', params=params, headers=headers)
    data = response.json()
    return {'races': [race_dict(race, type) for race in data['response']]}


def race_dict(race, type):
    if type == "race":
        title = race['competition']['name']
    if type == "1st Qualifying":
        title = f"{race['competition']['name']} - Qualifying"
    if type == "Sprint":
        title = f"{race['competition']['name']} - Sprint"
    if type == "1st Practice":
        title = f"{race['competition']['name']} - FP1"
    if type == "2nd Practice":
        title = f"{race['competition']['name']} - FP2"
    if type == "3rd Practice":
        title = f"{race['competition']['name']} - FP3"
    return {
        'title': title,
        'description': '',
        'category': 'Formula 1',
        'location': f"{race['competition']['location']['city']}, {race['competition']['location']['country']}",
        'venue': race['circuit']['name'],
        'image': race['circuit']['image'],
        'startDate': race['date'],
        'startTime': race['date']
        }


@event_routes.route('/getufc')
@login_required
def get_ufc():
    headers = {
        'Ocp-Apim-Subscription-Key': os.environ.get('UFC_KEY'),
    }

    response = requests.get('https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2022', headers=headers)
    data = response.json()
    return {'events': [ufc_dict(event) for event in data if event['Status'] == "Scheduled" and "UFC" in event['Name']]}


def ufc_dict(event):
    return {
        'title': event['Name'],
        'description': '',
        'category': 'UFC',
        'location': '',
        'venue': '',
        'image': '',
        'startDate': event['Day'],
        'startTime': event['DateTime']
        }

@event_routes.route('/getnascar/<series>')
@login_required
def get_nascar(series):
    headers = {
        'Ocp-Apim-Subscription-Key': os.environ.get('NASCAR_KEY'),
    }
    response = requests.get('https://api.sportsdata.io/nascar/v2/json/races/2022', headers=headers)
    data = response.json()
    return {'races': [nascar_dict(event) for event in data if (event['IsOver'] == False) and (event['SeriesID'] == int(series))]}



def nascar_dict(event):
    return {
        'title': event['Name'],
        'description': '',
        'category': 'NASCAR',
        'location': '',
        'venue': event['Track'],
        'image': '',
        'startDate': event['Day'],
        'startTime': event['DateTime']
        }


@event_routes.route('/getnfl/<team>')
@login_required
def get_nfl(team):
    headers = {
        'Ocp-Apim-Subscription-Key': os.environ.get('NFL_KEY'),
    }
    response = requests.get('https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022', headers=headers)
    data = response.json()
    return {'events': [nfl_dict(event) for event in data if "BYE" not in event["AwayTeam"] and (event["AwayTeam"] == team or event["HomeTeam"] == team)]}



def nfl_dict(event):
    return {
        'title': f"{event['AwayTeam']} @ {event['HomeTeam']}",
        'description': '',
        'category': 'NFL',
        'location': nfl_parse_location(event['StadiumDetails']),
        'venue': nfl_parse_venue(event['StadiumDetails']),
        'image': '',
        'startDate': event['Date'],
        'startTime': event['Date']
        }

def nfl_parse_venue(object):
    if not object:
        return ''
    else:
        return object['Name']

def nfl_parse_location(object):
    if not object:
        return ''
    else:
        return f"{object['City']}, {object['State']}"


@event_routes.route('/getnba/<team>')
@login_required
def get_nba(team):
    headers = {
        'Ocp-Apim-Subscription-Key': os.environ.get('NBA_KEY'),
    }
    response = requests.get('https://api.sportsdata.io/v3/nba/scores/json/Games/2023', headers=headers)
    data = response.json()
    return {'events': [nba_dict(event) for event in data if (event["AwayTeam"] == team or event["HomeTeam"] == team)]}



def nba_dict(event):
    return {
        'title': f"{event['AwayTeam']} @ {event['HomeTeam']}",
        'description': '',
        'category': 'NBA',
        'location': '',
        'venue': '',
        'image': '',
        'startDate': event['Day'],
        'startTime': event['DateTime']
        }
