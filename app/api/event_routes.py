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


@event_routes.route('/getsports')
@login_required
def get_sports():
    headers = {
        'accept': 'application/json',
        'Authorization': os.environ.get('SPORTS_KEY'),
    }

    params = {
        'dateTo': '2022-08-31',
        'competition': 'formula 1',
    }

    response = requests.get('https://api.allsportdb.com/v3/calendar', params=params, headers=headers)
    data = response.json()
    print('@@@@@@@@@@@@', data)
    return ''
