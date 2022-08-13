
from calendar import c
from app.models import db, User, Calendar, Event


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@email.com', password='password')
    labbit = User(
        username='labbit', email='xeddieee@gmail.com', password='password')

    db.session.add(demo)
    db.session.add(labbit)
    db.session.commit()

    calendar1 = Calendar(
        title="Demo's Calendar", description="appointments, reminders, and other important dates!", userId=1
    )
    calendar2 = Calendar(
        title="Gym Classes", description="Yoga and fitness classes at Movement Boulder and MMA classes from Easton Training Center.", userId=1
    )
    calendar3 = Calendar(
        title="Fitness Tracker", description="Do you even lift bro?", userId=1
    )
    calendar4 = Calendar(
        title="App Academy Schedule", description="Mod 7. Last mod, best mod.", userId=1
    )

    db.session.add(calendar1)
    db.session.add(calendar2)
    db.session.add(calendar3)
    db.session.add(calendar4)
    db.session.commit()


    event1= Event(
        title="Indpendence Day",
        description="",
        location="",
        category="holiday",
        startDate="2022-07-04",
        userId=1,
        calendarId=1,
        color="#adc9cd"
    )
    event2= Event(
        title="oil change",
        description="",
        location="Grease Monkey",
        category="car",
        startDate="2022-07-15",
        startTime="17:00:00",
        userId=1,
        calendarId=1,
        color="#32EEBD"
    )
    event3= Event(
        title="Lynn's birthday",
        description="",
        location="",
        category="birthday",
        startDate="2022-07-21",
        userId=1,
        calendarId=1,
        color="#ffb480"
    )
    event4= Event(
        title="group project due",
        description="Instaspam",
        location="",
        category="app academy",
        startDate="2022-07-25",
        userId=1,
        calendarId=1,
        color="#00C7FC"
    )
    event5= Event(
        title="passport renewal",
        description="",
        location="Colorado Passport Agency",
        category="appointment",
        startDate="2022-08-03",
        startTime="12:00:00",
        userId=1,
        calendarId=1,
        color="#c4f581"
    )
    event6= Event(
        title="dental cleaning",
        description="",
        location="Dr.Kim's Dental Office",
        category="medical",
        startDate="2022-08-05",
        startTime="10:00:00",
        userId=1,
        calendarId=1,
        color="#08cad1"
    )
    event7= Event(
        title="Abel's birthday dinner",
        description="",
        location="Bonchon Chicken",
        category="birthday",
        startDate="2022-08-05",
        startTime="06:00:00",
        userId=1,
        calendarId=1,
        color="#ffb480"
    )
    event8= Event(
        title="golf",
        description="",
        location="Boulder Golf Course",
        category="fun",
        startDate="2022-08-07",
        startTime="13:00:00",
        userId=1,
        calendarId=1,
        color="#f8f38d"
    )
    event9= Event(
        title="transmission repair",
        description="",
        location="AAMCO",
        category="car",
        startDate="2022-08-09",
        startTime="09:00:00",
        userId=1,
        calendarId=1,
        color="#32EEBD"
    )
    event10= Event(
        title="vaccine shot",
        description="",
        location="Rite Aid",
        category="medical",
        startDate="2022-08-10",
        startTime="15:00:00",
        userId=1,
        calendarId=1,
        color="#08cad1"
    )
    event11= Event(
        title="car shopping",
        description="",
        location="",
        category="",
        startDate="2022-08-13",
        userId=1,
        calendarId=1,
        color="#87f33f"
    )
    event12= Event(
        title="movie",
        description="",
        location="AMC",
        category="fun",
        startDate="2022-08-13",
        startTime="19:00:00",
        userId=1,
        calendarId=1,
        color="#f8f38d"
    )
    event13= Event(
        title="capstone project due",
        description="",
        location="",
        category="app academy",
        startDate="2022-08-15",
        userId=1,
        calendarId=1,
        color="#00C7FC"
    )
    event14= Event(
        title="date night",
        description="",
        location="some place nice",
        category="date",
        startDate="2022-08-17",
        startTime="18:00:00",
        userId=1,
        calendarId=1,
        color="#EC8993"
    )
    event15= Event(
        title="MTG night",
        description="EDH",
        location="",
        category="",
        startDate="2022-08-18",
        userId=1,
        calendarId=1,
        color="#9d94ff"
    )
    event16= Event(
        title="license renewal",
        description="",
        location="DMV",
        category="appointment",
        startDate="2022-08-20",
        startTime="13:00:00",
        userId=1,
        calendarId=1,
        color="#c4f581"
    )
    event17= Event(
        title="Jonathan's birthday",
        description="",
        location="",
        category="birthday",
        startDate="2022-08-21",
        userId=1,
        calendarId=1,
        color="#ffb480"
    )
    event18= Event(
        title="lunch with friends",
        description="",
        location="In-n-out",
        category="",
        startDate="2022-08-21",
        startTime="13:00:00",
        userId=1,
        calendarId=1,
        color="#87f33f"
    )
    event19= Event(
        title="date night",
        description="",
        location="some place nice",
        category="date",
        startDate="2022-08-21",
        startTime="18:00:00",
        userId=1,
        calendarId=1,
        color="#EC8993"
    )
    event20= Event(
        title="hiking",
        description="",
        location="flatirons",
        category="",
        startDate="2022-08-23",
        startTime="19:00:00",
        userId=1,
        calendarId=1,
        color="#f8f38d"
    )
    event21= Event(
        title="new tires",
        description="",
        location="costco",
        category="car",
        startDate="2022-08-25",
        startTime="13:30:00",
        userId=1,
        calendarId=1,
        color="#32EEBD"
    )
    event22= Event(
        title="GRADUATION!",
        description="",
        location="",
        category="app academy",
        startDate="2022-08-26",
        userId=1,
        calendarId=1,
        color="#00C7FC"
    )
    event23= Event(
        title="party time",
        description="",
        location="",
        category="",
        startDate="2022-08-27",
        userId=1,
        calendarId=1,
        color="#87f33f"
    )
    event24= Event(
        title="MTG night",
        description="",
        location="",
        category="MTG",
        startDate="2022-08-29",
        userId=1,
        calendarId=1,
        color="#9d94ff"
    )
    event25= Event(
        title="doctor check up",
        description="",
        location="doctor's office",
        category="medical",
        startDate="2022-08-31",
        startTime="14:30:00",
        userId=1,
        calendarId=1,
        color="#08cad1"
    )
    event26= Event(
        title="Labor Day",
        description="",
        location="",
        category="holiday",
        startDate="2022-09-05",
        userId=1,
        calendarId=1,
        color="#adc9cd"
    )
    event27= Event(
        title="golf",
        description="",
        location="the golf course",
        category="",
        startDate="2022-09-17",
        startTime="13:00:00",
        userId=1,
        calendarId=1,
        color="#f8f38d"
    )
    event28= Event(
        title="David's birthday",
        description="",
        location="",
        category="",
        startDate="2022-09-21",
        userId=1,
        calendarId=1,
        color="#ffb480"
    )
    event29= Event(
        title="date night",
        description="",
        location="some place nice",
        category="date",
        startDate="2022-09-25",
        startTime="18:30:00",
        userId=1,
        calendarId=1,
        color="#EC8993"
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
    db.session.add(event15)
    db.session.add(event16)
    db.session.add(event17)
    db.session.add(event18)
    db.session.add(event19)
    db.session.add(event20)
    db.session.add(event21)
    db.session.add(event22)
    db.session.add(event23)
    db.session.add(event24)
    db.session.add(event25)
    db.session.add(event26)
    db.session.add(event27)
    db.session.add(event28)
    db.session.add(event29)
    db.session.commit()

    event30= Event(
        title="Power Flow",
        description="Lori F.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-01",
        startTime="18:30:00",
        userId=1,
        calendarId=2,
        color="#9d94ff"
    )
    event31= Event(
        title="Kickboxing",
        description="Drew Van Schoick",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-02",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#32EEBD"
    )
    event32= Event(
        title="Vinyasa Flow",
        description="Ashely V.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-03",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#00C7FC"
    )
    event33= Event(
        title="Alpine Fit",
        description="Luyi G.",
        location="Movement Boulder",
        category="fitness",
        startDate="2022-08-04",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#87f33f"
    )
    event34= Event(
        title="Muay Thai",
        description="Brandon Winn",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-06",
        startTime="11:30:00",
        userId=1,
        calendarId=2,
        color="#08cad1"
    )
    event35= Event(
        title="Power Flow",
        description="Lori F.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-08",
        startTime="18:30:00",
        userId=1,
        calendarId=2,
        color="#9d94ff"
    )
    event36= Event(
        title="Kickboxing",
        description="Drew Van Schoick",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-09",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#32EEBD"
    )
    event37= Event(
        title="Vinyasa Flow",
        description="Ashely V.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-10",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#00C7FC"
    )
    event38= Event(
        title="Alpine Fit",
        description="Luyi G.",
        location="Movement Boulder",
        category="fitness",
        startDate="2022-08-11",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#87f33f"
    )
    event39= Event(
        title="Muay Thai",
        description="Brandon Winn",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-13",
        startTime="11:30:00",
        userId=1,
        calendarId=2,
        color="#08cad1"
    )
    event40= Event(
        title="Power Flow",
        description="Lori F.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-15",
        startTime="18:30:00",
        userId=1,
        calendarId=2,
        color="#9d94ff"
    )
    event41= Event(
        title="Kickboxing",
        description="Drew Van Schoick",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-16",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#32EEBD"
    )
    event42= Event(
        title="Vinyasa Flow",
        description="Ashely V.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-17",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#00C7FC"
    )
    event43= Event(
        title="Alpine Fit",
        description="Luyi G.",
        location="Movement Boulder",
        category="fitness",
        startDate="2022-08-18",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#87f33f"
    )
    event44= Event(
        title="Muay Thai",
        description="Brandon Winn",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-20",
        startTime="11:30:00",
        userId=1,
        calendarId=2,
        color="#08cad1"
    )
    event45= Event(
        title="Power Flow",
        description="Lori F.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-22",
        startTime="18:30:00",
        userId=1,
        calendarId=2,
        color="#9d94ff"
    )
    event46= Event(
        title="Kickboxing",
        description="Drew Van Schoick",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-23",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#32EEBD"
    )
    event47= Event(
        title="Vinyasa Flow",
        description="Ashely V.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-24",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#00C7FC"
    )
    event48= Event(
        title="Alpine Fit",
        description="Luyi G.",
        location="Movement Boulder",
        category="fitness",
        startDate="2022-08-25",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#87f33f"
    )
    event49= Event(
        title="Muay Thai",
        description="Brandon Winn",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-27",
        startTime="11:30:00",
        userId=1,
        calendarId=2,
        color="#08cad1"
    )
    event50= Event(
        title="Power Flow",
        description="Lori F.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-29",
        startTime="18:30:00",
        userId=1,
        calendarId=2,
        color="#9d94ff"
    )
    event51= Event(
        title="Kickboxing",
        description="Drew Van Schoick",
        location="Easton Training Center",
        category="mma",
        startDate="2022-08-30",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#32EEBD"
    )
    event52= Event(
        title="Vinyasa Flow",
        description="Ashely V.",
        location="Movement Boulder",
        category="yoga",
        startDate="2022-08-31",
        startTime="17:30:00",
        userId=1,
        calendarId=2,
        color="#00C7FC"
    )

    db.session.add(event30)
    db.session.add(event31)
    db.session.add(event32)
    db.session.add(event33)
    db.session.add(event34)
    db.session.add(event35)
    db.session.add(event36)
    db.session.add(event37)
    db.session.add(event38)
    db.session.add(event39)
    db.session.add(event40)
    db.session.add(event41)
    db.session.add(event42)
    db.session.add(event43)
    db.session.add(event44)
    db.session.add(event45)
    db.session.add(event46)
    db.session.add(event47)
    db.session.add(event48)
    db.session.add(event49)
    db.session.add(event50)
    db.session.add(event51)
    db.session.add(event52)
    db.session.commit()

    event53= Event(
        title="hangboard",
        description="15mm 30lbs 5x10s max hangs",
        location="",
        category="climbing",
        startDate="2022-08-01",
        userId=1,
        calendarId=3,
        color="#EC8993"
    )
    event54= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-02",
        userId=1,
        calendarId=3,
        color="#ffb480"
    )
    event55= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-03",
        userId=1,
        calendarId=3,
        color="#f8f38d"
    )
    event56= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-04",
        userId=1,
        calendarId=3,
        color="#c4f581"
    )
    event57= Event(
        title="leg day",
        description="5x5 180lbs squat, 3x10 80lbs bulgarian split squat, 3x10 90lbs calf raises",
        location="",
        category="lifting",
        startDate="2022-08-05",
        userId=1,
        calendarId=3,
        color="#adc9cd"
    )
    event58= Event(
        title="core",
        description="3 sets(20 v-ups, 10 toe-to-bars, 40 russian twists, 1 min plank)",
        location="",
        category="fitness",
        startDate="2022-08-06",
        userId=1,
        calendarId=3,
        color="#9d94ff"
    )
    event59= Event(
        title="hangboard",
        description="15mm 30lbs 5x10s max hangs",
        location="",
        category="climbing",
        startDate="2022-08-08",
        userId=1,
        calendarId=3,
        color="#EC8993"
    )
    event60= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-09",
        userId=1,
        calendarId=3,
        color="#ffb480"
    )
    event61= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-10",
        userId=1,
        calendarId=3,
        color="#f8f38d"
    )
    event62= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-11",
        userId=1,
        calendarId=3,
        color="#c4f581"
    )
    event63= Event(
        title="leg day",
        description="5x5 180lbs squat, 3x10 80lbs bulgarian split squat, 3x10 90lbs calf raises",
        location="",
        category="lifting",
        startDate="2022-08-12",
        userId=1,
        calendarId=3,
        color="#adc9cd"
    )
    event64= Event(
        title="core",
        description="3 sets(20 v-ups, 10 toe-to-bars, 40 russian twists, 1 min plank)",
        location="",
        category="fitness",
        startDate="2022-08-13",
        userId=1,
        calendarId=3,
        color="#9d94ff"
    )

    db.session.add(event53)
    db.session.add(event54)
    db.session.add(event55)
    db.session.add(event56)
    db.session.add(event57)
    db.session.add(event58)
    db.session.add(event59)
    db.session.add(event60)
    db.session.add(event61)
    db.session.add(event62)
    db.session.add(event63)
    db.session.add(event64)
    db.session.commit()

    event65= Event(
        title="Welcome to Mod 7 Pt. 1",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-01",
        startTime="11:00:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event66= Event(
        title="Mod 7 Pt. 2",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-15",
        startTime="13:30:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event67= Event(
        title="The Resume",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-15",
        startTime="14:00:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event68= Event(
        title="The Personal Pitch",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-16",
        startTime="09:15:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event69= Event(
        title="Online Presence",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-17",
        startTime="09:15:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event70= Event(
        title="Non-Technical Interviews",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-18",
        startTime="09:15:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event71= Event(
        title="Applying Approaches",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-18",
        startTime="13:30:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event72= Event(
        title="Technical Interviewing",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-22",
        startTime="09:15:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event73= Event(
        title="Preparing for an Onsite",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-23",
        startTime="09:15:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event74= Event(
        title="System Design",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-23",
        startTime="01:30:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )
    event75= Event(
        title="Moving Forward",
        description="",
        location="",
        category="live lecture",
        startDate="2022-08-26",
        startTime="01:30:00",
        userId=1,
        calendarId=4,
        color="#EC8993"
    )

    db.session.add(event65)
    db.session.add(event66)
    db.session.add(event67)
    db.session.add(event68)
    db.session.add(event69)
    db.session.add(event70)
    db.session.add(event71)
    db.session.add(event72)
    db.session.add(event73)
    db.session.add(event74)
    db.session.add(event75)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
