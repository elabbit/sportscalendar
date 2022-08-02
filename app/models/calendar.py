from .db import db
from .calendarEvent import calendarEvents

class Calendar(db.Model):
    __tablename__ = 'calendars'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(400))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    calendarOwner = db.relationship("User", back_populates="user_calendars")

    calendar_events = db.relationship("Event",
        secondary=calendarEvents,
        back_populates="event_calendars"
    )
