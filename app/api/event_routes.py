from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Calendar, Event
from app.forms import EventForm

event_routes = Blueprint('event', __name__)

#EVENTS
@event_routes.route('/new/<calendarId>', methods=['POST'])
@login_required
def add_event(calendarId):
    form = EventForm()
    print("FORM", form.data)
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
        print(calendar.to_dict())
        return {"calendar": calendar.to_dict(), "event": newEvent.to_dict()}
