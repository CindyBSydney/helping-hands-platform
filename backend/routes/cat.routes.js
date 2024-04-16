const express = require('express');
const router = express.Router();
const catController = require('../controller/cat.controller');

//add a cat to the array
router.get('/add/:name', catController.create); 
// /add is the path that the server should respond to
// :name is the parameter that the server should extract from the URL
// catController.create is the function that should be called when the server receives a request to this path

//send cat names to the client
router.get('/', catController.read); 

//put method is used to update the cat's name
router.put('/update/:name/:newName', catController.update);

//delete method is used to delete the cat
router.delete('/delete/:name', catController.delete);

module.exports = router;
