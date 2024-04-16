
const cat = []; //array to store the cats

//function to create a new cat and add it to the array of cats, then send a response to the client
exports.create = (req, res) => { 
    //function to create a new cat and add it to the array of cats, then send a response to the client
    //exports means that the function is available to other files
    //create means that the function is responsible for creating a new cat
    //req is the request object that contains information about the HTTP request
    //res is the response object that contains methods for sending a response to the client

    const { name } = req.params; //extract the name parameter from the request
    cat.push(name); //add the name to the array of cats
    //cats.push(req.params.name);
    res.send("Cat created: " + name); //send a response to the client with the message "Cat created" 
};

//function to read all the cats and send a response to the client
exports.read = (req, res) => { //function to read all the cats and send a response to the client
    res.send(cat); //send a response to the client with the array of cats
};

//function to update the name of a cat and send a response to the client
exports.update = (req, res) => {
    const { name, newName } = req.params; //extract both parameters from the URL
    const index = cat.indexOf(name); //find the index of the cat with the old name
    if (index !== -1) { //if the cat is found
        cat[index] = newName; //update the cat's name with the new name
        res.send("Cat updated: " + name + " to " + newName); //send a response to the client with the message "Cat updated"
    } else {
        res.send("Cat not found: " + name); //send a response to the client with the message "Cat not found"
    }
};

//function to delete a cat and send a response to the client
exports.delete = (req, res) => {
    const { name } = req.params; //extract the name parameter from the URL
    const index = cat.indexOf(name); //find the index of the cat with the name
    if (index !== -1) { //if the cat is found
        cat.splice(index, 1); //remove the cat from the array
        res.send("Cat deleted: " + name); //send a response to the client with the message "Cat deleted"
    } else {
        res.send("Cat not found: " + name); //send a response to the client with the message "Cat not found"
    }
};



