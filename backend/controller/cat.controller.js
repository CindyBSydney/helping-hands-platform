
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



