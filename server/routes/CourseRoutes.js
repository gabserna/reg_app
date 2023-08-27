const express = require('express');
const courseController = require('.../controllers/course.controller')
const router = express.Router(); //eslint-disable-line new-cap

router.get('/courses', courseController.getAllCourses);
router.get('/getCourseById', courseController.getCourseById);
router.get('/filteredCourses', courseController.getFilteredCourses);
router.get('/getAllCoursesForUser', courseController.getAllCoursesForUser);

module.exports = router;