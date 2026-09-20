const { get_user, post_user, get_user_by_id, update_user, delete_user } = require('../controller/user.controller')

const router = require('express').Router()

router.route('/user').get(get_user).post(post_user)
router.route('/user/:id').get(get_user_by_id).patch(update_user).delete(delete_user)

module.exports = router