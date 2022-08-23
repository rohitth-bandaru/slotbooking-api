initial setup : nodejs with npm
npm modules used : underscore, express


run: 
### `npm install`
### `node app.js`


api's have been verified from the postman application screenshot has been attached in the ### `screenshot` folder for reference.


//to create a class with a course i have used POST to create an empty class with defined name and capacity.

api http://localhost:3000/api/slots

in the body of the POST request syntax used is shown below

{
    "class_name": "<class_name>",
    "capacity": <capacity>
}

#####################################################################################################



//enrollment of a student into the class has been done with the help of PUT request.

api http://localhost:3000/api/slots/:class_name

in the body of the POST request syntax used is shown below

{
    "user":<user>
}

if capacity of the class reaches the max capacity new users will be added to the waiting list.

#####################################################################################################

//if a student wants to delete his enrollment then the action can be done using DELETE request

api http://localhost:3000/api/slots/:class_name

in the body of the POST request syntax used is shown below

{
    "user":<user>
}

if there are any users in waitinglist first person in the queue will be added to the enrollmentlist.

#####################################################################################################

// to get the details of all the classes and their internal details GET request can be used

api http://localhost:3000/api/slots
