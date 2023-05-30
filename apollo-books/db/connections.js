import env from 'dotenv';
import mongoose  from 'mongoose';

env.config();

var user=process.env.DB_USER;
var password=process.env.DB_PASSWORD;
var server=process.env.DB_SERVER;
var database=process.env.DB_DATABASE;

const connectionString=`mongodb+srv://${user}:${password}@${server}/${database}?authSource=admin&replicaSet=Training-shard-0&readPreference=primary&ssl=true`;


export async function connect(){
    await mongoose.connect(connectionString);
}
