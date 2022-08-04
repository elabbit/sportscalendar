from flask import Blueprint
from flask_login import login_required, current_user
from ..models import db, Event

event_routes = Blueprint('events', __name__)


@event_routes.route('/<calendarId>')
@login_required
def getEvents(calendarId):
    events = Event.query.filter_by(calendarId=calendarId).all()
    return {"calendarEvents": [event.to_dict() for event in events]}
