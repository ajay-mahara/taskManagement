
const express = require('express')
const app = express()
require('./database/connection')

const userRoute = require('./routes/userRouter')
const taskRoute = require('./routes/taskRouter')

// const { get_user, post_user, get_user_by_id, update_user, delete_user } = require('./controller/user.controller')
// const { delete_task, update_task, get_task_by_id, post_task, get_task } = require('./controller/task.controller')

app.use(express.json())

app.get('/', function(req, res) {

    res.json('this is home page')

})

app.use("/api", userRoute )
app.use("/api", taskRoute )

// app.get('/user',get_user)

// app.post('/user',post_user)

// app.get('/user/:id',get_user_by_id)

// app.patch('/user/:id',update_user)

// app.delete('/user/:id',delete_user)

// app.get('/task',get_task)

// app.post('/task',post_task)

// app.get('/task/:id',get_task_by_id)

// app.patch('/task/:id',update_task)

// app.delete('/task/:id',delete_task)



app.listen(3000,() => {
    console.log('Server is running on port 3000')
})