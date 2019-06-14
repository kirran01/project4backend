Welcome to the database for Blogception. Within the database, there is only one model; the User model. A user can have one email,one password, and may posts.

Initial Data Collection
========

At this stage, all of the data related to the user model will be typed in by the user themself. Once the user signs up, their email and password will be logged into the database, and every post that gets added will be pushed into the users 'posts' array to be used in the front end. 


Features
--------

Full CRUD routes, offering the ability to create, read, update and delete information each user.

Users:
POST: http://localhost:4000/api/login route to add a user account to db
GET: http://localhost:4000/api/user/:userId get a specific user from db
GET:http://localhost:4000/api/ route to find all users
DELETE: http://localhost:4000/api/:email delete a spefic user in the db
PUT: http://localhost:4000/api/deletePost delete a post from a user in the db
PUT: http://localhost:4000/api/updateposts/:id update a users posts in the db





Technologies used
-------
Javascript, Express, Mongoose, MongoDB, Heroku


Whats in the Repo?
-------
/controllers
*user.js

/db
*/seed.js
*/connection.js

/models
*User.js

*index.js


Installation
------------

Install $project by:
1.go to the github repositories for front and back end:
front-https://github.com/kirran01/project4frontend
back-https://github.com/kirran01/project4backend
2.fork and clone down the repository
3.install mongoose and express in your terminal 
4.install react-twitter-embed and react-instagram-embed
5.install postman
6.within postman enter https://localhost:4000/api/, this is where you will add the routes to utilize crud functionality
7.within a route, either post/get/delete or put something within that object to make a change or to simply get the data.


Contribute
----------

source code:https://github.com/kirran01/project4frontend
https://github.com/kirran01/project4backend

Support
-------

If you are having issues, there is a mailing list located at: kirran-@live.com

License
-------

this project is liscened by myself, kirran kirpalani
