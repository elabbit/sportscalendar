from xmlrpc.client import Boolean
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class CalendarForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description')
    defcal = BooleanField('default')
