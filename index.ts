import { config } from 'dotenv';
import mongoose from 'mongoose';
// Reading the environment variables from the env file
config();
import env from './env';
import app from './app';

const initializeServer = async () => {
    // Making connection to database
    const { connection } = await mongoose.connect(env.MONGO);
    // Logging success message 
    console.log(`Successfully connected to '${connection.name}' database`);
    // Starting server
    const message = `Listening for requests on ${env.PORT}`;
    app.listen(env.PORT, () => console.log(message));
}

initializeServer();