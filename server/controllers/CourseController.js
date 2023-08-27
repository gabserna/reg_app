const User = require("../middleware/UserModel");
const Course = require("../middleware/CourseModel");

class CourseController {
  getAllCourses(req, res) {
    Course.find({}, (err, courses) => {
      if (err) {
        console.error(`Error retrieving courses: ${err}`);
        return res.status(500).json({ error: err.message });
      }
      res.json({ courses: courses });
    });
  }

  getCourseById(req, res) {
    Course.findById(req.query.courseId, (err, course) => {
      if (err) {
        console.error(`Error retrieving course: ${err}`);
        return res.status(500).json({ error: err.message });
      }
      res.json({ course: course.toObject() });
    });
  }

  getFilteredCourses(req, res) {
    // Solo se puede utilizar la opción 'i' si es una cadena de texto;
    //se produce un error si es un número
  }
}

module.exports = CourseController;
