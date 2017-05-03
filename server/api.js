'use strict'
const api = require('express').Router()
const db = require('../db')
const campusBank = require('../campusBank')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

function respondWithAllCampuses (req, res, next){
	var allTheCampuses = campusBank.list();
	// res.render('index', {
	// 	title: "Campus Website!",
	// 	campuses: allTheCampuses,
	// 	showForm: true
	// });
	res.json(allTheCampuses) //temporary
}
// GET 
// - all campuses
// - a campus by id
// - all students
// - a student by id
api.get('/', respondWithAllCampuses)
api.get('/academics', respondWithAllCampuses)

api.get('/campus/:campusid', function(req, res, next){
	var campusById = campusBank.find({ id: Number(req.params.campusid) });
	console.log( req.params.campusid )
	res.json(campusById)
})

module.exports = api