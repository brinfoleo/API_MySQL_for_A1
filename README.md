Objective: 
	Creation of API to record all A1 system transactions in MySQL database via API

Reference:
	https://www.youtube.com/watch?v=2XBWTEbGw4w&t=14s (Not worked)
	https://jestjs.io/docs/getting-started
	https://www.w3schools.com/nodejs/nodejs_mysql.asp
	https://www.tutsmake.com/node-express-js-creating-a-restful-api-mysql-example/

Preparation: 
	- Installation of resources to access MySQL
	  npm install mysql2
	- Installation TDD
	  npm install tdd
	- Installation Jest
	 npm install --save-dev jest
	- Installation of resources to access MySQL
	  npm install mysql


https://www.tutsmake.com/node-express-js-creating-a-restful-api-mysql-example/
Explanation of node.js express crud mysql rest api example as shown below:
Implement following apis with methods name
		=================================================
		Method		Url			Action
		=================================================
		GET			/users		fetch all users
		GET 		user/1		fetch user with id ==1
		POST		user		add new user
		PUT			user		update user by id == 1
		DELETE		user		delete user by id == 1

//run the below command
npm start
after run this command open your browser and hit 
http://127.0.0.1:3000
OR
http://localhost:3000

Structure for passing object with SQL string
{sql: "SELECT * FROM users"}