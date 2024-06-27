require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');

const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_URL = process.env.DB_URL;
const DB_NAME = "task-jeeva";
const uri = "mongodb+srv://"+DB_USER+":"+DB_PWD+"@"+DB_URL+"/task-?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db(DB_NAME);

        // Read JSON files
        const playersData = JSON.parse(fs.readFileSync('./data/players.json', 'utf-8'));

        // Import Players Data
        await importPlayers(db, playersData);
    } finally {
        await client.close();
        console.log("Disconnected from MongoDB!");
    }
}

async function importPlayers(db, playersData) {
    const playerCollection = db.collection('players');

    try {
        await playerCollection.deleteMany();
        await playerCollection.insertMany(playersData);
        console.log('Players data imported successfully');
    } catch (error) {
        console.error('Error importing players data', error);
    }
}

run();
