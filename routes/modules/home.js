const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 定義首頁路由
router.get('/', (req, res) => {
    return Todo.findAll({
        raw: true,
        nest: true
    })
        .then(todos => res.render('index', { todos }))
        .catch(error => console.error(error))
})
// 匯出路由模組
module.exports = router