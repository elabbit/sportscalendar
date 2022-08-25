
from calendar import c
from app.models import db, User, Calendar, Event


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@email.com', password='password')

    db.session.add(demo)
    db.session.commit()

    calendar1 = Calendar(
        title="Demo's Calendar", description="appointments, reminders, and other important dates!", userId=1, background=1
    )
    calendar2 = Calendar(
        title="Gym Classes", description="Yoga and fitness classes at Movement Boulder and MMA classes from Easton Training Center.", userId=1, background=2
    )
    calendar3 = Calendar(
        title="Fitness Tracker", description="Do you even lift bro?", userId=1, background=3
    )

    db.session.add(calendar1)
    db.session.add(calendar2)
    db.session.add(calendar3)
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
        color="#9BF6FF"
    )
    event3= Event(
        title="Lynn's birthday",
        description="",
        location="",
        category="birthday",
        startDate="2022-07-21",
        userId=1,
        calendarId=1,
        color="#FFD6A5"
    )
    event4= Event(
        title="group project due",
        description="Instaspam",
        location="",
        category="app academy",
        startDate="2022-07-25",
        userId=1,
        calendarId=1,
        color="#BDB2FF"
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
        color="#CAFFBF"
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
        color="#A0C4FF"
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
        color="#FFD6A5"
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
        color="#FDFFB6"
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
        color="#9BF6FF"
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
        color="#A0C4FF"
    )
    event11= Event(
        title="car shopping",
        description="",
        location="",
        category="",
        startDate="2022-08-13",
        userId=1,
        calendarId=1,
        color="#98F5E1"
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
        color="#FDFFB6"
    )
    event13= Event(
        title="capstone project due",
        description="",
        location="",
        category="app academy",
        startDate="2022-08-15",
        userId=1,
        calendarId=1,
        color="#BDB2FF"
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
        color="#FFADAD"
    )
    event15= Event(
        title="MTG night",
        description="EDH",
        location="",
        category="",
        startDate="2022-08-18",
        userId=1,
        calendarId=1,
        color="#FFC6FF"
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
        color="#CAFFBF"
    )
    event17= Event(
        title="Jonathan's birthday",
        description="",
        location="",
        category="birthday",
        startDate="2022-08-21",
        userId=1,
        calendarId=1,
        color="#FFD6A5"
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
        color="#98F5E1"
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
        color="#FFADAD"
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
        color="#FDFFB6"
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
        color="#9BF6FF"
    )
    event22= Event(
        title="GRADUATION!",
        description="",
        location="",
        category="app academy",
        startDate="2022-08-26",
        userId=1,
        calendarId=1,
        color="#BDB2FF"
    )
    event23= Event(
        title="party time",
        description="",
        location="",
        category="",
        startDate="2022-08-27",
        userId=1,
        calendarId=1,
        color="#98F5E1"
    )
    event24= Event(
        title="MTG night",
        description="",
        location="",
        category="MTG",
        startDate="2022-08-29",
        userId=1,
        calendarId=1,
        color="#FFC6FF"
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
        color="#A0C4FF"
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
        color="#FDFFB6"
    )
    event28= Event(
        title="David's birthday",
        description="",
        location="",
        category="",
        startDate="2022-09-21",
        userId=1,
        calendarId=1,
        color="#FFD6A5"
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
        color="#FFADAD"
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
        color="#FFADAD"
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
        color="#FFD6A5"
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
        color="#CAFFBF"
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
        color="#A0C4FF"
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
        color="#BDB2FF"
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
        color="#FFADAD"
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
        color="#FFD6A5"
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
        color="#CAFFBF"
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
        color="#A0C4FF"
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
        color="#BDB2FF"
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
        color="#FFADAD"
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
        color="#FFD6A5"
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
        color="#CAFFBF"
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
        color="#A0C4FF"
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
        color="#BDB2FF"
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
        color="#FFADAD"
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
        color="#FFD6A5"
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
        color="#CAFFBF"
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
        color="#A0C4FF"
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
        color="#BDB2FF"
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
        color="#FFADAD"
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
        color="#FFD6A5"
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
        color="#CAFFBF"
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
        color="#98F5E1"
    )
    event54= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-02",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event55= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-03",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event56= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-04",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event57= Event(
        title="leg day",
        description="5x5 180lbs squat, 3x10 80lbs bulgarian split squat, 3x10 90lbs calf raises",
        location="",
        category="lifting",
        startDate="2022-08-05",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event58= Event(
        title="core",
        description="3 sets(20 v-ups, 10 toe-to-bars, 40 russian twists, 1 min plank)",
        location="",
        category="fitness",
        startDate="2022-08-06",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event59= Event(
        title="hangboard",
        description="15mm 30lbs 5x10s max hangs",
        location="",
        category="climbing",
        startDate="2022-08-08",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event60= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-09",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event61= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-10",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event62= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-11",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event63= Event(
        title="leg day",
        description="5x5 180lbs squat, 3x10 80lbs bulgarian split squat, 3x10 90lbs calf raises",
        location="",
        category="lifting",
        startDate="2022-08-12",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event64= Event(
        title="core",
        description="3 sets(20 v-ups, 10 toe-to-bars, 40 russian twists, 1 min plank)",
        location="",
        category="fitness",
        startDate="2022-08-13",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event65= Event(
        title="hangboard",
        description="15mm 30lbs 5x10s max hangs",
        location="",
        category="climbing",
        startDate="2022-08-15",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event66= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-16",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event67= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-17",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event68= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-18",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event69= Event(
        title="leg day",
        description="5x5 180lbs squat, 3x10 80lbs bulgarian split squat, 3x10 90lbs calf raises",
        location="",
        category="lifting",
        startDate="2022-08-19",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event70= Event(
        title="core",
        description="3 sets(20 v-ups, 10 toe-to-bars, 40 russian twists, 1 min plank)",
        location="",
        category="fitness",
        startDate="2022-08-20",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event71= Event(
        title="hangboard",
        description="15mm 30lbs 5x10s max hangs",
        location="",
        category="climbing",
        startDate="2022-08-22",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event72= Event(
        title="chest/shoulder/tricep",
        description="5x5 150lbs bench, 5x5 150lbs incline bench, 5x5 80lbs military press, 3x10 15lb dumbbell lateral raises, 3x15 35lbs skullcrushers",
        location="",
        category="lifting",
        startDate="2022-08-23",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event73= Event(
        title="campusboard",
        description="2x ladders, 2x ladder skips, 2x6 bumps, 2x power pulls",
        location="",
        category="climbing",
        startDate="2022-08-24",
        userId=1,
        calendarId=3,
        color="#98F5E1"
    )
    event74= Event(
        title="back/bicep",
        description="5x5 180lbs deadlift, 3x10 40lbs dumbbell row, 3x10 25lbs bicep curls, 3x10 25lb hammer curls",
        location="",
        category="lifting",
        startDate="2022-08-25",
        userId=1,
        calendarId=3,
        color="#98F5E1"
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
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
