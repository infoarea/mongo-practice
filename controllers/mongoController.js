

// {
//    name : "Saiful islam",
//    age : 30,
//    skill : 'WP Devs',
//    email : 'saiful@gmail.com',
//    gender : 'Male',
//    location : 'Mirpur'
// },
// {
//    name : "Kaal islam",
//    age : 50,
//    skill : 'JS Devs',
//    email : 'kamal@gmail.com',
//    gender : 'Male',
//    location : 'Jatrabari'
// },
// {
//    name : "Abir islam",
//    age : 70,
//    skill : 'WP Devs',
//    email : 'abir@gmail.com',
//    gender : 'Male',
//    location : 'Gulshan'
// },
// {
//    name : "Karim islam",
//    age : 120,
//    skill : 'GO Devs',
//    email : 'karim@gmail.com',
//    gender : 'Male',
//    location : 'Jatrabari'
// }

const Users = require('../models/User');
const Foods = require('../models/Food');
const Movies = require('../models/Movie');

const UsersCollection = async () => {

    try {


      const data = await Users.findById('63844da7510f8144dbc7f86b')
      
            console.log( await data.save() );
 
      
      
    } catch (error) {
      console.log(error.message);
    }



}

module.exports = UsersCollection;