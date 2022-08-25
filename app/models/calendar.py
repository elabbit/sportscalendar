from .db import db

class Calendar(db.Model):
    __tablename__ = 'calendars'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(400))
    default = db.Column(db.Boolean, default=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    background = db.Column(db.Integer)

    calendarOwner = db.relationship("User", back_populates="userCalendars")
    calendarEvents = db.relationship("Event", back_populates="eventCalendar", cascade="all, delete")


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'default': self.default,
            'userId': self.userId,
            'events': [ event.to_dict() for event in self.calendarEvents ],
            'background': self.background
        }
