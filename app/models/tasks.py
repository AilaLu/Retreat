from .db import db, environment, SCHEMA, add_prefix_for_prod

class Task(db.Model):
    __tablename__ = 'tasks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    categoryId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")))
    title = db.Column(db.String(100), nullable=False)
    icon = db.Column(db.String(100))
   

# relationship attribute
    users = db.relationship("User", back_populates="tasks")
    categories = db.relationship("Category", back_populates="tasks")
    favorites_lists = db.relationship("Favorite", back_populates="tasks", cascade="all, delete")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'title': self.title,
            'icon': self.icon,
        }
