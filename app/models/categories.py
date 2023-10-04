from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    name = db.Column(db.String(100), nullable=False)

# relationship attribute
    users = db.relationship("User", back_populates="categories")
    tasks = db.relationship("Task", back_populates="categories", cascade="all, delete", lazy="joined")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'name': self.name,
            'tasks': [task.title for task in self.tasks]
            # raise TypeError(f"Object of type {type(o).__name__} is not JSON serializable")
        }
