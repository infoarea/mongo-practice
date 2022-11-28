
const express = require('express');
const { getAllStudent, createStudent, singleStudent, editStudent, studentDataStore } = require('../controllers/studentController');
const multer = require('multer');
const path = require('path');

const router = express.Router();


//multer config
const storage = multer.diskStorage({
    destination : (req, file, cb) => {

        cb(null, path.join(__dirname, '../public/images/students'))
    },
    filename : (req, file, cb) => {

        cb( null, file.originalname ) 
    }
});


//multer middleware
const studentImgMulter = multer({
    storage : storage
}).single('student_photo');



//Get All Student
router.get('/', getAllStudent );
router.get('/create', createStudent );
router.post('/create', studentImgMulter, studentDataStore );

router.get('/:id/edit', editStudent );



router.get('/:id', singleStudent );




//Module exports
module.exports = router;