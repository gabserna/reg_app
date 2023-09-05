import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function Courses() {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    fetch("./classes")
      .then((response) => response.json())
      .then((data) => setClassesData(data))
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  const filteredClassesData = classesData.slice(1);

  return (
    <div className="classesBox">
      <h1 id="login-header" className="sticky-header">Select your classes</h1>
      <TableContainer component={Paper} style={{ background: "transparent", overflowX: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
              <TableCell align="center" className="bold">Course ID</TableCell>
              <TableCell align="center" className="bold-header">Course Title</TableCell>
              <TableCell align="center" className="bold-header">Course Description</TableCell>
              <TableCell align="center" className="bold-header">Room #</TableCell>
              <TableCell align="center" className="bold-header">Capacity</TableCell>
              <TableCell align="center" className="bold-header">Credits</TableCell>
              <TableCell align="center" className="bold-header">Tuition Cost</TableCell>
              <TableCell align="center" className="bold-header">Register Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredClassesData.map((classItem, index) => (
              <TableRow key={index}>
                <TableCell>{classItem.course_id}</TableCell>
                <TableCell>{classItem.course_title}</TableCell>
                <TableCell id="course_description">
                  {classItem.course_description}
                </TableCell>
                <TableCell>{classItem.classroom_number}</TableCell>
                <TableCell>{classItem.capacity}</TableCell>
                <TableCell>{classItem.credit_hours}</TableCell>
                <TableCell>{classItem.tuition_cost}</TableCell>
                <TableCell>
                  <Button size="small" style={{ background: 'var(--color-mtech)', color: 'var(--color-secondary)'}}>Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>
  );
}

export default Courses;