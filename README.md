# Retreat[LIVE LINK](https://retreat-iivp.onrender.com/)

Retreat is a full-stack web application that that focuses on user experience where users may check-in on daily mood/tasks.

For more details of our current features, visit our wiki page:

 - [Feature List](https://github.com/AilaLu/Retreat/wiki/Feature-List)
- [Schema](https://github.com/AilaLu/Retreat/wiki/Schema)
- [User Stories](https://github.com/AilaLu/Retreat/wiki/User-Stories)

# Calendar landing Page
[gif]

# Check In Page
[gif]

# Manage Tasks Page
[gif]


# Technologies Used
Frontend
- Javascript, React, Redux, HTML, CSS

Backend
- Python, Flask, SQLAlchemy


# Features
While using Itys, users can:
- Create an account and login, or sign in with a demo user.
- View a landing page of sample products on the itsy website.
- Create, read, update, and delete your own sample products.
- Create, read, update, and delete reviews on products.
- Add and delete to your favorites list.
- Add and modify products in your shopping cart.
- Search for products by name, category or description in the searchbar.

# Endpoints
| Request | Purpose |
| --- | --- |
| GET / | Navigate to the Itsy Homepage, and view our products and information |
| GET /products/<:id> | View a product detail page, see the information related to that individual product. |
| GET /products/<:id>/reviews | Query for reviews by product id |
| GET /favorites | View all favorites by specific user, if not logged in, redirects to login page |
| GET /logout | Logs out a user |
| GET /unauthorized | Returns unauthorized JSON when flask-login authentication fails |
| GET /reviews/<:id> | Query for reviews by id |
| GET /reviews | Query for all reviews by user id |
| GET /shopping_cart/current | Query for all shopping_cart_items and returns them in a list of shopping_cart dictionaries with the current user |
| POST /login | Logs in Authenticated user |
| POST /signup | Creates a new user and logs them in |
| POST /products/new | Creates a new product by id |
| POST /products/update/<:id> | Updates a product by id |
| POST /products/<:id>/shopping_cart | Create a shopping cart item to the shopping cart from the product detail page |
| POST /products/<:id>/favorites | Adds a product to your favorites |
| PUT /reviews/<:id> | Post new review for product by product id |
| DELETE /products/delete/<:id> | Deletes a product by id if you are the owner of the product |
| DELETE /products/<:id>/favorites | Removes a product from your favorites |
| DELETE /reviews/<:id> | Delete a review by review id |
| DELETE /shopping_cart/<:id> | Clicking X remove an item in shopping cart, clicking Order Up clears product from shopping cart, |


# Future Goals
- AWS Image integration for uploading photos of products
- Chat feature, users can chat with product owners
- Make Itsy mobile friendly
- Multiple product images per product detail page

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

