from .db import db
from .calendarEvent import calendarEvents

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(400))
    location = db.Column(db.String(80))
    category = db.Column(db.String(20))
    startDate = db.Column(db.Date, nullable=False)
    endDate = db.Column(db.Date)
    startTime = db.Column(db.Time)
    endTime = db.Column(db.Time)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    eventOwner = db.relationship("User", back_populates="user_events")

    event_calendars = db.relationship("Calendar",
        secondary=calendarEvents,
        back_populates="calendar_events"
    )
