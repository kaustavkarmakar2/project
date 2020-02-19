# Appiness Interactive


This is the starter code for the backend application

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| user_id                 | Integer          | The user’s unique identifier |
| full_name          | String           | The user’s first name  and last name     |
| phone_no  | String           | The user’s phone number |
| password | String           | the Users unquie password |
| email_id   | String            | The user’s email         | 
| address | String           | The user’s address|

### User_Roles

User_Roles include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id              | Integer | The role’s unique identifier |
| title      | String | The user’s role |
| content | String | The user's content |




## Change in models/index.js and config/config.json file 
 Set Databases username,password,databasename
## Run  the create-db.sql querys in query tool in postgressql
Create the tables in your database
Creates some dummy values in Roles table after database creation

INSERT INTO public.roles(
	id, title, details)
	VALUES (1, 'SoftwareDeveloper','to build software');
##json value passed to body 
{   "user_id":1,
	 "full_name": "Kaustav",
     "phone_no": "9674774916",
     "password": "abc123",
     "email_id":"kaustavrg2@gmail.com",
     "roles_id":1
}
after that user_id will be auto-incremented 
## Project Start 

npm install 
node app
`the developement server is running at 3002`