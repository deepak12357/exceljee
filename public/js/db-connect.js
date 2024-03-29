const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const MONGOURI = "mongodb+srv://deepak:deepak@cluster0.hf3tn5i.mongodb.net/db1?retryWrites=true&w=majority";

//mongodb+srv://admin-exceljee:topatopa@cluster0.wfgot.mongodb.net/db1?retryWrites=true&w=majority

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
