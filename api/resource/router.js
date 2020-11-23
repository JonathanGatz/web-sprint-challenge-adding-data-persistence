// build your `/api/resources` router here


const express  = require('express');

const Projects = require('./model')

const router = express.Router();

router.request(express.json())


router.get('/', (req, res) => {
    res.status(200).json({ api: "up" });
});


router.get('/projects', (req, res, next) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => next(error))
})


router.post('/projects', (req, res, next) => {
    Projects.add(req.body)
    .then(projects => {
        res.status(201).jason(projects)
    })
    .catch(error => next(error));
})


