const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("db connection is successfull"))
    .catch( (error)=>  {
        console.log("Issue in db connection");
        console.error(error.message);
        // isska matlb dekhna ha 
        process.exit(1);
    })
}

module.exports = dbConnect;