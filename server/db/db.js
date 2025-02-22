import mongoose from 'mongoose';

function connect(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Successfully connected with mongoDB!");
    }).catch((error)=>{
        console.log(error.message);
    })
}

export default connect;