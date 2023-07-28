const express = requiere('express');
const adminController = require('../controllers/admin.controller');
const courseController = require('../controllers/course.controller');
const router = express.Router(); //eslint-disable-line new-cap

router.get('/allUsers', adminController.getAllUsers);
router.get('/filteredUsers', adminController.getFilteredUsers);
router.get('/getUserCourses', adminController.getUserCourses);
router.post('/registerUserForCourse', adminController.registerUserForCourse);
router.post('/unregisterUserForCourse', adminController.unregisterUserForCourse);
router.get('/getUserById', adminController.getUserById);
router.post('/saveUser', adminController.createUser);
router.post('/saveUser/:userID', adminController.updateUser);
router.delete('/deleteUser', adminController.deleteUser);
router.post('/saveCourse', courseController.createCourse);
router.post('/saveCourse/:courseId', courseController.updateCourse);
router.delete('/deleteCourse', adminController.deleteCourse);

module.exports = router;