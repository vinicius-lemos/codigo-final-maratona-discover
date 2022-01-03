const express = require('express')
const routes = express.Router()
const JobControllers = require('./controllers/JobController')
const ProfileControllers = require('./controllers/ProfileController')
const DashBoard = require('./controllers/DashBoard')

const Login = require('./controllers/Login')

routes.get('/', DashBoard.index)
routes.get('/profile', ProfileControllers.index)
routes.post('/profile', ProfileControllers.update)
routes.get('/job', JobControllers.create)
routes.post('/job', JobControllers.save)
routes.get('/job/:id', JobControllers.show)
routes.post('/job/:id', JobControllers.update)
routes.post('/job/delete/:id', JobControllers.delete)

routes.get('/login', Login.index)

module.exports = routes