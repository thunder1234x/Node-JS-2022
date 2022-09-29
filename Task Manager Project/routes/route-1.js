const express = require('express');

const router = express.Router();

const {
    getAllTasks,
    getSingleTask,
    postTasks,
    updateTask,
    deleteTask
} = require('../controllers/action-new')


router.route('/').get(getAllTasks).post(postTasks);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);




module.exports = router;