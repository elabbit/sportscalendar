from .db import db

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
    editable = db.Column(db.Boolean, default=True)
    color = db.Column(db.String(7))
    calendarId = db.Column(db.Integer, db.ForeignKey('calendars.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    eventOwner = db.relationship("User", back_populates="userEvents")
    eventCalendar = db.relationship("Calendar", back_populates="calendarEvents")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'location': self.location,
            'category': self.category,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'startTime': str(self.startTime),
            'endTime': self.endTime,
            'editable': self.editable,
            'color': self.color,
            'calendarId': self.calendarId,
            'userId': self.userId,
        }
