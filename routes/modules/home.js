const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

// 定義首頁路由
router.get('/', (req, res) => {
    User.findByPk(req.user.id)
        .then((user) => {
            if (!user) throw new Error('user not found')

            return Todo.findAll({
                raw: true,
                nest: true,
                where: { UserId: req.user.id }
            })
        })
        .then(todos => res.render('index', { todos }))
        .catch(error => console.error(error))
})
// 匯出路由模組
module.exports = router