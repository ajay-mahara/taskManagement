
const express = require('express')
const app = express()
require('./database/connection')

const {user, task} = require('./database/connection')
app.use(express.json())

app.get('/', function(req, res) {

    
    
    res.json('this is home page')
})

app.get('/user',async function(req,res){

    const data = await user.findAll()


    res.json({
        // message : 'this is user page',
        data
    })
})

app.post('/user',async function(req,res){

    const {id,username,email,password} = req.body

    await user.create({
        id : id,
        username : username,
        email : email,
        password : password
    })

    res.json('user created successfully')
})

app.get('/user/:id',async function(req,res){

    const id = req.params.id
    const data = await user.findByPk(id)

    res.json({
        message : `user ${id} found successfully`,
        data
    })
})

app.patch('/user/:id',async function(req,res){

    const id = req.params.id

    const {username,email,password} = req.body

    await user.update({
        username : username,
        email : email,
        password : password
    },
    {
        where : {
            id : id
        }
    })

    res.json(`user ${id} updated successfully`)
})

app.delete('/user/:id',async function(req,res){

    const id = req.params.id
    
    const data = await user.destroy({
        where : {
            id : id
        }
    })

    res.json({
        message : `user ${id} is deleted successfully`,
        // data
    })
})

app.get('/task',async function(req,res){

    const data = await task.findAll()

    
    res.json({
        message : 'this is task page',
        data
    })
})

app.post('/task',async function(req,res){


    const {id , title , description , status} = req.body

    await task.create({
        id : id,
        title : title,
        description : description,
        status : status
    })


    res.json({
        message : 'this is task post page',
        data
    })
})

app.get('/task/:id',async function(req,res){

    const id = req.params.id
    const data = await task.findByPk(id)


    res.json({
        message : 'this is task get by id page',
        data
    })
})

app.patch('/task/:id',async function(req,res){

    const id = req.params.id

    const {title , description , status} = req.body
    
    const task_update =await task.update({
        title : title,
        description : description,
        status : status
    },
    {
        where : {
            id : id
        }
    })

    res.json(`task ${id} updated successfully`)
})



// app.delete('/task',function(req,res){
//     res.json('this is task delete page')
// })



app.delete('/task/:id',async function(req,res){

    const id = req.params.id
    const data = await task.destroy({
        where : {
            id : id
        }
    })

    res.json({
        message : `task ${id} is deleted successfully`,
        // data
    })
})



app.listen(3000,() => {
    console.log('Server is running on port 3000')
})