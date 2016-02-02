// my main file

//exercise 1

//storing a function in the express
//the require must give back a function
/*
var express = require("express");

//returns a function
//that function will return an object
var app = express();


//calling a method on the object called app, passing in two arguments 
//into the get method the first argument is a string that holds / and
//the second argument is a function, refered to as a callback function

//the callback doesnt occur until a you were looking for a / and and a url

app.get("/", function(req, res){
	//inside the callback function
	
	//sending back hello world as a string
	res.send("Hello World");
});

//Listening for a port, 3000 is the port number, listen function
app.listen(3000, function(){
	console.log("I'm up and running on port 3000");
	
});*/


//exercise 2
//Returns you json code

var express = require("express");

//returns a function
//that function will return an object
var app = express();


//calling a method on the object called app, passing in two arguments 
//into the get method the first argument is a string that holds / and
//the second argument is a function, refered to as a callback function

//the callback doesnt occur until a you were looking for a / and and a url

app.get("/", function(req, res){
	//inside the callback function
	
	//Creating an object
	var o = {
		msg: "Hello from Node (JSON)"
	};
	
	//res.type("application/json");
	
	//sending back json of the object
	res.send(JSON.stringify(o));
});

//To run it and look at the browser, type in localhost:3000

//another example of using .get
app.get("/index.html", function(req, res){
	//This suppose to tell you in inspect elemtn the types being returned and those allowed but need john to recheck this
	//res.type("png");
	
	//sends it out as html, in the browser type localhost:3000/index.html
	res.send("<html><body><h3>Hello from express</h3></body></html>");
	
});

//Listening for a port, 3000 is the port number, listen function
app.listen(3000, function(){
	console.log("I'm up and running on port 3000");
	
});