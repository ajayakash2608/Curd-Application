import mongoose from 'mongoose'


const connection = async (username, password) => {

    const URL =`mongodb://${username}:${password}@ac-mhwml7b-shard-00-00.bloywio.mongodb.net:27017,ac-mhwml7b-shard-00-01.bloywio.mongodb.net:27017,ac-mhwml7b-shard-00-02.bloywio.mongodb.net:27017/?ssl=true&replicaSet=atlas-y7pumj-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {

      await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
      console.log('Database Conneceted Successfully');
    } catch (error) {
        console.log("Error while conecting to database",error);
    }
    
}


export default connection