from .db import db

calendarEvents = db.Table(
    'calendarEvents',
    db.Model.metadata,
    db.Column('calendarId', db.Integer, db.ForeignKey('calendars.id'), primary_key=True),
    db.Column('eventId', db.Integer, db.ForeignKey('events.id'), primary_key=True)
)
