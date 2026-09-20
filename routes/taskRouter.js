const { get_task, post_task, get_task_by_id, update_task, delete_task } = require('../controller/task.controller')


const router = require('express').Router()



router.route('/task').get(get_task).post(post_task)
router.route('/task/:id').get(get_task_by_id).patch(update_task).delete(delete_task)


module.exports = router