
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');


const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')))

//Show Student
const getAllStudent = (req, res ) => {


    res.render('student/show', {
        students
    });
}

//Create Student
const createStudent = (req, res ) => {

    res.render('student/create');
}
//Single Student
const singleStudent = (req, res ) => {

    res.render('student/single');
}
//Edit student
const editStudent = (req, res ) => {

    res.render('student/edit');
}

//student data store
const studentDataStore = (req, res) => {
    //get form data
    const { name, email, cell, location, photo} = req.body;
    //last id
    let last_id = 1;
    if (students.length > 0) {
        last_id = students[students.length -1].id + 1;
    }
   //New Data 
    students.push({
        id: last_id,
        name: name,
        email: email,
        cell: cell,
        location: location,
        photo: req.file ? req.file.filename : 'avatar.png'
    })
   
    //Data write to json db
    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    //Redirect
    res.redirect('/student');
    
    
}


module.exports = {
    getAllStudent,
    createStudent,
    singleStudent,
    editStudent,
    studentDataStore
}