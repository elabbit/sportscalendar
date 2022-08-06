from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TimeField
from wtforms.validators import DataRequired




class EventForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description')
    location = StringField('location')
    category = StringField('category')
    description = StringField('description')
    startDate = DateField('startDate', validators=[DataRequired()])
    startTime = TimeField('startTime')
    color = StringField('color')
