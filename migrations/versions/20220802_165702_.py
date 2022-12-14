"""empty message

Revision ID: 2174a65dade3
Revises: ffdc0a98111c
Create Date: 2022-08-02 16:57:02.818867

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2174a65dade3'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('calendars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=40), nullable=False),
    sa.Column('description', sa.String(length=400), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=400), nullable=True),
    sa.Column('location', sa.String(length=80), nullable=True),
    sa.Column('category', sa.String(length=20), nullable=True),
    sa.Column('startDate', sa.Date(), nullable=False),
    sa.Column('endDate', sa.Date(), nullable=True),
    sa.Column('startTime', sa.Time(), nullable=True),
    sa.Column('endTime', sa.Time(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('calendarEvents',
    sa.Column('calendarId', sa.Integer(), nullable=False),
    sa.Column('eventId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['calendarId'], ['calendars.id'], ),
    sa.ForeignKeyConstraint(['eventId'], ['events.id'], ),
    sa.PrimaryKeyConstraint('calendarId', 'eventId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('calendarEvents')
    op.drop_table('events')
    op.drop_table('calendars')
    # ### end Alembic commands ###
