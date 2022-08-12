from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Calendar, Event
from app.forms import EventForm
import requests
import os


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


@event_routes.route('/getformulaone')
@login_required
def get_sports():
    headers = {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': os.environ.get('FORMULA_KEY'),
    }

    params = {'type': 'race', 'season': '2022', 'next':'10'}

    response = requests.get('https://api-formula-1.p.rapidapi.com/races', params=params, headers=headers)
    data = response.json()
    return {'races': [race_dict(race) for race in data['response']]}


def race_dict(race):

    return {
        'name': race['competition']['name'],
        'location': f"{race['competition']['location']['city']}, {race['competition']['location']['country']}",
        'venue': race['circuit']['name'],
        'image': race['circuit']['image'],
        'date': race['date']
        }
