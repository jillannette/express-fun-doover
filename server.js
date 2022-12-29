const express = require('express');
// bodyParser added 
const bodyParser = require('body-parser');

const app = express();

// WITH EJS, TO RENDER VIEW "TEMPLATES" - EJS IS TEMPLATE ENGINE
//A template engine enables you to use static template files in your 
//application. At runtime, the template engine replaces variables in 
//a template file with actual values, and transforms the template into 
//an HTML file sent to the client. This approach makes it easier to 
//design an HTML page.
/////
//app.set('view engine', 'ejs');
// USED WITH STATIC FILES, TO GET FRONT-END JAVASCRIPT FILES IN HERE,
// WOULD ALSO NEED  THE MAIN.JS SCRIPT TAG IN HTML FILE, 
//app.use(express.static('public'));

// WITH BODY-PARSER (WHICH GETS THE BODY OF THE REQUEST OBJECT)
//"URLENCODED is just an option to ensure how we're parsing the data that comes in.
//we'll almost always use these two settings
app.use(bodyParser.urlencoded({ extended: false }));
//below parses our incoming body as JSON
app.use(bodyParser.json());

//console.log(app);
// this logs the actual app object;

// FIRST EXERCISE
// app.get('/', (request, response) => {
//   //response.send('Hello World');
//   //response.json({ name: 'Jill', title: 'Software Engineer' });
  
// });

// 2ND EXERCISE to use params in request 
// app.get('/names/:firstName/:lastName', (request, response) => {
//   const firstName = request.params.firstName;
//   const lastName = request.params.lastName;
  
//   response.send(`Hello ${firstName} ${lastName}`);
//   // with this route, http://localhost:8000/names/Jill
//   // browser prints Hello Jill
// });

// app.get('/names/:firstName/:lastName', (request, response) => {
//   response.send(`Hello, ${request.params.firstName} ${request.params.lastName}`);
//   // this route http://localhost:8000/lastname/Arnold
//   // prints this response Hello, Ms. Arnold
// });

// 3RD EXERCISE to use query in request 
// app.get('/names', (request, response) => {
//   response.send(`Hello ${request.query.name}`)
// });

// EJS
// app.get('/', (request, response) => {
//   response.render('index');
// });
// Hello World!! in bold

//EJS with ejs elements in Views folder using <%= name %> syntax

// app.get('/names', (request, response) => {
//   response.render('myNamesView', { lastName: 'Smith' });
// });

//USED WITH STATIC FILES
// app.get('/', (request, response) => {
//   response.render('index');
// });
//WITH  BODY PARSER - IT CREATES A PROPERTY ON THE REQUEST CALLED BODY 
//THAT IT GETS FROM THE REQUEST
app.post('/posts', (request, response) => {
  console.log(request.body);
});
//IN POSTMAN, NO RESPONSE WILL CONNECT BUT IN CONSOLE.LOG IN TERMINAL, YOU 
//WILL GET THIS RESPONSE [Object: null prototype] { hello: 'world' }


app.listen(8000);
// this gets an error cannot GET, this is because it has 
// nothing to get. To give it something to get, we create a route above app.listen.
// with app.get above, browser prints 'Hello World'.  
// when response.json is used, prints {"name":"Jill","title":"Software Engineer"}


