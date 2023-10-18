from .db import db, environment, SCHEMA, add_prefix_for_prod

class CheckInTask(db.Model):
    __tablename__ = 'check_in_tasks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    taskId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("tasks.id")))
    checkInId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("checkIns.id")))
    

# relationship attribute
    tasks = db.relationship("Task", back_populates="check_in_tasks", lazy="joined")
    checkIns = db.relationship("CheckIn", back_populates="check_in_tasks")


    def to_dict(self):
        return {
            'id': self.id,
            'taskId': self.taskId,
            'checkInId': self.checkInId,
            'task': {
                'id': self.tasks.id,
                'categoryId': self.tasks.categoryId,
                'title': self.tasks.title,
                'icon': self.tasks.icon
            }
        }
