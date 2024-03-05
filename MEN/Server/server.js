const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

express = require('express');
eobj = express();
port = 9889;
 
//////////////////////////////////////////////////////////////
//  GetConnection
//  It is used to connect node + express serever to mongodb
//////////////////////////////////////////////////////////////
async function GetConnection()
{
    console.log("Database connected");
    let result = await client.connect();
    let db = result.db("MarvellousInfosystems");
    return db.collection("Batches");
}
///////////////////////////////////////////////////////////
//  ReadData
//  It is used to read the data
///////////////////////////////////////////////////////////
async function ReadData(req , res)
{
    let data = await GetConnection();
    data = await data.find().toArray();
    console.log("Data from tha Marevllous Database is : ");
    console.log(data);
    return data;
}
//////////////////////////////////////////////////////
//  DeleteData
//  It is used to delete the data
//////////////////////////////////////////////////////
async function DeleteData()
{
    let data = await GetConnection();
    let result = await data.deleteOne({"Name" : "LSP"});
    if(result.acknowledged)
    {
        console.log("Data gets deleted succesfully");
    }

}
//////////////////////////////////////////////////////
//  InsertData
//  It is used to Insert the data
//////////////////////////////////////////////////////
async function InsertData()
{
    let data = await GetConnection();
    let result = await data.insertOne({"Name" : "LSP","Fees" : "22000","Duration" : "7 Months"});
    if(result.acknowledged)
    {
        console.log("Data gets inserted succesfully");
    }

}
//////////////////////////////////////////////////////
//  UpdateData
//  It is used to update the data
//////////////////////////////////////////////////////
async function UpdateData()
{
    let data = await GetConnection();
    let result = await data.updateOne({"Name" : "LSP"},{$set : {"Fees" : "14000"}});
    if(result.acknowledged)
    {
        console.log("Data gets updated succesfully");
    }
}

// start the express server
function startServer()
{
    console.log("Server is started at port : 9889");
}

async function RootPage(req,res)
{
    console.log("Root Page");
}

//getBatches
async function ReadBatches(req,res)
{
    // Read data from Mongodb
    let Received_Data;
    Received_Data = await ReadData();

    // Send data to Angualr
    res.json(Received_Data);
}

//deleteBatches
async function DeleteBatches(req,res)
{
    // Delete data from Mongodb
    DeleteData();
}
//insertBatches
async function InsertBatches(req,res)
{
    // insert data from Mongodb
    InsertData();
}
//UpdateBatches
async function UpdateBatches(req,res)
{
    // insert data from Mongodb
    UpdateData();
}
//////////////////////////////////////////////////////
//  main
//  Entry point function
//////////////////////////////////////////////////////
function main()
{
    eobj.listen(port,startServer);
    eobj.get('/',RootPage);
    eobj.get('/getBatches',ReadBatches);
    eobj.get('/deleteBatches',DeleteBatches);
    eobj.get('/insertBatches',InsertBatches);
    eobj.get('/updateBatches',UpdateBatches);

}
main();
