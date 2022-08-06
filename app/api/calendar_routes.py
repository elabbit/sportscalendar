from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Calendar
from app.forms import CalendarForm


calendar_routes = Blueprint('calendar', __name__)

@calendar_routes.route('/')
@login_required
def get_calendars():
    calendars = Calendar.query.filter_by(userId=current_user.id).all()
    return {"calendars": [calendar.to_dict() for calendar in calendars]}


@calendar_routes.route('/new', methods=['POST'])
@login_required
def add_calendar():
    form = CalendarForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        calendar = Calendar(
            title=form.data['title'],
            description=form.data['description'],
            userId=current_user.id
        )
        db.session.add(calendar)
        db.session.commit()
        return calendar.to_dict()


@calendar_routes.route('/edit/<calendarId>', methods=['PUT'])
@login_required
def edit_calendar(calendarId):
    form = CalendarForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        editedCal = Calendar.query.get(calendarId)

        editedCal.title=form.data['title']
        db.session.commit()

        editedCal.description=form.data['description']
        db.session.commit()

        return editedCal.to_dict()


@calendar_routes.route('/delete/<calendarId>', methods=['DELETE'])
@login_required
def delete_post(calendarId):
    calendar = Calendar.query.get(calendarId)
    db.session.delete(calendar)
    db.session.commit()
    return f'{calendarId}'
