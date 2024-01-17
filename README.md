# [Retreat LIVE LINK](https://retreat-iivp.onrender.com/)

Retreat is a full-stack web application that that focuses on user experience where users may check-in on daily mood/tasks.

For more details of our current features, visit our wiki page:

 - [Feature List](https://github.com/AilaLu/Retreat/wiki/Feature-List)
- [Schema](https://github.com/AilaLu/Retreat/wiki/Schema)
- [User Stories](https://github.com/AilaLu/Retreat/wiki/User-Stories)


# Calendar landing Page
<img width="1081" alt="Screenshot 2023-10-25 at 22 09 03" src="https://github.com/AilaLu/Retreat/assets/61234744/0a9b9d01-52ad-417a-8f8a-7ba2e9fd3484">

# Check In Page
<img width="1543" alt="Screenshot 2023-10-25 at 22 10 24" src="https://github.com/AilaLu/Retreat/assets/61234744/9bbc78a6-1688-4aa8-9c56-7f71127945f2">


# Manage Tasks Page
<img width="2560" alt="Screenshot 2023-10-25 at 22 09 07" src="https://github.com/AilaLu/Retreat/assets/61234744/5ba4ada5-a229-40c0-874e-ab2832b78e58">


# Technologies Used
Frontend
- Javascript, React, Redux, HTML, CSS

Backend
- Python, Flask, SQLAlchemy


# Features
While using Retreat, users can:
- Create an account and login, or sign in with a demo user.
- View a landing page of Calendar and click "check In for year/month/date" for the date they clicked.
- Create, read, update, and delete your own categories.
- Create, read, update, and delete tasks on categories.
- Create, read, update your check-ins.

# Endpoints
| Request | Purpose |
| --- | --- |
| GET / | Navigate to the Retreat Homepage, view the check in calendar |
| GET /check_in | View all check-in  in a day. Create, Updating a check-in is by a pop-up module |
| GET /manage_tasks | View all categories, each with all tasks. Create, Update Delete a category/task is by pop-up module |

| GET /logout | Logs out a user |
| POST /login | Logs in Authenticated user |
| POST /signup | Creates a new user and logs them in |



# Future Goals
- AWS Image integration for uploading daily photos
- Daily Journal 


## Set Up

- Clone the repo

### Back End Server

- Open up a new terminal

- Open up the project folder

- Install dependencies

  ```bash
  pipenv install -r requirements.txt
  ```

- Create a **.env** file based on the example

- Run the following commands to open your pipenv, migrate the database, seed the database, and run the Flask app

  ```bash
  pipenv shell
  ```

  ```bash
  flask db upgrade
  ```

  ```bash
  flask seed all
  ```

  ```bash
  flask run
  ```

### Front End

- Open up another new terminal

- Direct to the <code>react-app</code> folder

- Install dependencies

  ```bash
  npm install
  ```

- Start the React App

  ```bash
  npm start
  ```

