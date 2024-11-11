// 1 import json server
const jsonServer =  require('json-server')

// 2 create server  application using json server

const mediaAppServer =  jsonServer.create()

// 3 create a middleweare used by json server
const middleweare = jsonServer.defaults()

// 4 create router : set up router for db.json file
const router = jsonServer.router('db.json')

// 5 applying router to server
mediaAppServer.use(middleweare)  

//6 applying router to server
mediaAppServer.use(router)

//7 define port
const PORT = 3000

//8 starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media app server started on PORT" +PORT);
})