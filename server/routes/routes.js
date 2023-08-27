const express = requiere('express');
const router = express.Router(); //eslint-disable-line new-cap
const AdminController = require('../controllers/AdminController');
const CourseController = require('../controllers/CourseController');

router.get('/allUsers', AdminController.getAllUsers);
router.get('/filteredUsers', AdminController.getFilteredUsers);
router.get('/getUserCourses', AdminController.getUserCourses);
router.post('/registerUserForCourse', AdminController.registerUserForCourse);
router.post('/unregisterUserForCourse', AdminController.unregisterUserForCourse);
router.get('/getUserById', AdminController.getUserById);
router.post('/saveUser', AdminController.createUser);
router.post('/saveUser/:userID', AdminController.updateUser);
router.delete('/deleteUser', AdminController.deleteUser);
router.post('/saveCourse', CourseController.createCourse);
router.post('/saveCourse/:courseId', CourseController.updateCourse);
router.get('/courses', CourseController.getCourses);
router.delete('/deleteCourse', AdminController.deleteCourse);

module.exports = router;