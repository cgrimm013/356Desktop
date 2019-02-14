const express = require('express')
var myParser = require("body-parser");
const app = express()
app.use(myParser.urlencoded({extended : true}));
app.use(myParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 8181

let id = 0

let assignments = [{
  id: id++,
  type: "Reading",
  class: "CS 428",
  assignmentDay: 2,
  dueDate: {
    day: 2,
    month: "February",
    year: "2019"
  },
  descr: "Read the mythical man month chapters 16-19 by next class."
},
{
  id: id++,
  type: "Project",
  class: "CS 356",
  assignmentDay: 0,
  dueDate: null, //dueDate is optional
  descr: "Finish writing the backend server by the end of today"
},
{
  id: id++,
  type: "Lab",
  class: "CS 404",
  assignmentDay: 5,
  dueDate: null, //dueDate is optional
  descr: "Eat all the pizzas"
}]

let classes = [{
  id: id++,
  name: "CS 428"
},
{
  id: id++,
  name: "CS 404"
},
{
  id: id++,
  name: "CS 356"
}]

const createAssignment = (req) => {
  id = id + 1; //increment the id
  let newAssignment = {
    id: id,
    type: req.body.type,
    class: req.body.class,
    assignmentDay: req.body.assignmentDay,
    dueDate: req.body.dueDate, //dueDate is optional
    descr:  req.body.descr
  }
  return newAssignment;
}

app.get('/api/assignments', (req, res) => {
  res.send(assignments)
})

app.post('/api/assignments', (req, res) => {
  let newAssignment = createAssignment(req);
  assignments.push(newAssignment);
  //res.send(newAssignment);
  res.send(assignments);
})

app.delete('/api/assignments/:id', (req, res) => {
  let deleteID = parseInt(req.params.id);
  let removeIndex = assignments.map(assignment => { return assignment.id; }).indexOf(deleteID);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that assignment doesn't exist");
    return;
  }
  assignments.splice(removeIndex, 1);
  //res.sendStatus(200);
  res.send(assignments);
})

app.get('/api/classes', (req, res) => {
  res.send(classes)
})

app.post('/api/classes', (req, res) => {
  id = id + 1;
  let newClass = {
    id: id,
    name: req.body.name
  };
  classes.push(newClass);
  //res.send(newClass);
  res.send(classes);
})

app.delete('/api/classes/:id', (req, res) => {
  let deleteID = parseInt(req.params.id);
  let removeIndex = classes.map(aClass => { return aClass.id; }).indexOf(deleteID);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that class doesn't exist");
    return;
  }
  classes.splice(removeIndex, 1);
  //res.sendStatus(200);
  res.send(classes);
})

app.listen(port, () => console.log(`Desktop server app listening on port ${port}!`))
