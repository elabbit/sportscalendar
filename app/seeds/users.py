
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
        title="demo's calendar one", userId=1
    )
    calendar2 = Calendar(
        title="demo's calendar one", userId=1
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
        title="sample event 1", startDate="2022-07-03", userId=1, calendarId=1
    )
    event2= Event(
        title="sample event 2", startDate="2022-07-016", userId=1, calendarId=1
    )
    event3= Event(
        title="sample event 3", startDate="2022-07-21", userId=1, calendarId=1
    )
    event4= Event(
        title="sample event 4", startDate="2022-07-05", userId=2, calendarId=2
    )
    event5= Event(
        title="sample event 5", startDate="2022-07-10", userId=2, calendarId=2
    )
    event6= Event(
        title="sample event 6", startDate="2022-07-20", userId=2, calendarId=2
    )


    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)
    db.session.add(event5)
    db.session.add(event6)
    db.session.commit()




# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
