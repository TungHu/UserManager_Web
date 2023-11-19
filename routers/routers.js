const express = require('express')
const router = express.Router()
const controller  = require('../controllers/controller')

module.exports = function (io) {
//     const list_students = await student.find().select('id name subject teacher time mssv -_id');
//         res.render("../views/dashboard.ejs",{studentList: list_students})
//     // console.log(list_students)
// }(req,res)=> res.render("../views/dashboard.ejs"))
router.get("/control",controller.control)
router.post('/addAccount',controller.addAccount)

return router;

}
    