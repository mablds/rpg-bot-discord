const mongoose = require('mongoose');

module.exports.config = async() => {
    //open the connection with the mongoDB
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('mongoose connected')
}