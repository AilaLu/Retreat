"""empty message

Revision ID: 3a63a43a94dc
Revises: f2ee3752d974
Create Date: 2023-10-10 13:05:00.751474

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3a63a43a94dc'
down_revision = 'f2ee3752d974'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('checkIns', schema=None) as batch_op:
        batch_op.add_column(sa.Column('mood', sa.String(), nullable=False))
        batch_op.drop_column('meh')
        batch_op.drop_column('happy')
        batch_op.drop_column('sad')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('checkIns', schema=None) as batch_op:
        batch_op.add_column(sa.Column('sad', sa.BOOLEAN(), nullable=False))
        batch_op.add_column(sa.Column('happy', sa.BOOLEAN(), nullable=False))
        batch_op.add_column(sa.Column('meh', sa.BOOLEAN(), nullable=False))
        batch_op.drop_column('mood')

    # ### end Alembic commands ###