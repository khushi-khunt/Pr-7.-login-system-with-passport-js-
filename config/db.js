
       
const mongoose = require('mongoose')

const connectDB = async() =>{
    
    try {
        
        const conn = await mongoose.connect(
            `mongodb+srv://khuntkhushi506:khuntkhushi506@cluster0.sizjj.mongodb.net/InstaBlog-passport`
        )
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = connectDB;