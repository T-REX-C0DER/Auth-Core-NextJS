import mongoose from "mongoose";

export async function connect() {

    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log(err);
            process.exit(1);
        })


    } catch (error) {
        console.log('something goes wrong ');
        console.log(error);
        process.exit(1);
    }

}

    
