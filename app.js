const express = require('express')
const app = express()
require('./database/connection')

app.get('/', function(req, res) {
    res.json('this is home page')
})

app.get('/user',function(req,res){
    res.json('this is user page')
})

app.post('/user',function(req,res){
    res.json('this is user post page')
})

app.get('/task',function(req,res){
    res.json('this is task page')
})

app.post('/task',function(req,res){
    res.json('this is task post page')
})

app.patch('/task',function(req,res){
    res.json('this is task patch page')
})

app.delete('/task',function(req,res){
    res.json('this is task delete page')
})

app.get('/task/:id',function(req,res){
    res.json('this is task get by id page')
})

app.delete('/task/:id',function(req,res){
    res.json('this is task delete by id page')
})


app.listen(3000,() => {
    console.log('Server is running on port 3000')
})