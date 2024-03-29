"""add images

Revision ID: 1231e0b01827
Revises: 4331d7e53581
Create Date: 2023-11-07 03:30:12.465505

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1231e0b01827'
down_revision = '4331d7e53581'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('checkInId', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['checkInId'], ['check_ins.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('images')
    # ### end Alembic commands ###