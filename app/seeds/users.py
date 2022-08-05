
from app.models import db, User, Calendar, Event


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo', email='demo@email.com', password='password')
    labbit = User(
        username='labbit', email='xeddieee@gmail.com', password='password')

    db.session.add(demo)
    db.session.add(labbit)
    db.session.commit()

    calendar1 = Calendar(
        title="demo's calendar", description="important dates!", userId=1
    )
    calendar2 = Calendar(
        title="yoga classes", description="yoga at Movement Boulder", userId=1
    )
    calendar3 = Calendar(
        title="labbit's calendar two", userId=2
    )
    calendar4 = Calendar(
        title="labbit's calendar two", userId=2
    )

    db.session.add(calendar1)
    db.session.add(calendar2)
    db.session.add(calendar3)
    db.session.add(calendar4)
    db.session.commit()


    event1= Event(
        title="passport renewal", startDate="2022-08-03", userId=1, calendarId=1
    )
    event2= Event(
        title="dentist appointment", startDate="2022-08-07", userId=1, calendarId=1
    )
    event3= Event(
        title="project due", startDate="2022-08-15", userId=1, calendarId=1
    )
    event4= Event(
        title="party time", startDate="2022-08-16", userId=1, calendarId=1
    )
    event5= Event(
        title="someone's birthday", startDate="2022-08-23", userId=1, calendarId=1
    )
    event6= Event(
        title="GRADUATION", startDate="2022-08-26", userId=1, calendarId=1
    )
    event7= Event(
        title="Power Flow", startDate="2022-08-08", userId=1, calendarId=2
    )
    event8= Event(
        title="Vinyasa Flow", startDate="2022-08-10", userId=1, calendarId=2
    )
    event9= Event(
        title="Power Flow", startDate="2022-08-15", userId=1, calendarId=2
    )
    event10= Event(
        title="Vinyasa Flow", startDate="2022-08-17", userId=1, calendarId=2
    )
    event11= Event(
        title="Power Flow", startDate="2022-08-22", userId=1, calendarId=2
    )
    event12= Event(
        title="Vinysasa Flow", startDate="2022-08-24", userId=1, calendarId=2
    )
    event13= Event(
        title="Power Flow", startDate="2022-08-29", userId=1, calendarId=2
    )
    event14= Event(
        title="Vinysasa Flow", startDate="2022-08-31", userId=1, calendarId=2
    )

    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)
    db.session.add(event5)
    db.session.add(event6)
    db.session.add(event7)
    db.session.add(event8)
    db.session.add(event9)
    db.session.add(event10)
    db.session.add(event11)
    db.session.add(event12)
    db.session.add(event13)
    db.session.add(event14)
    db.session.commit()




# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
