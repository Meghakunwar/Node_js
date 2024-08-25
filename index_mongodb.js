// const {MongoClient}=require('mongodb');
// //    same -->// const MongoClient=require('mongodb').MongoClient;

// const url='mongodb://localhost:27017';
// const database='e-comm'
// const client=new MongoClient(url);

// async function getData(){
//     let result=await client.connect();
//     let db=result.db(database);
//     let collection=db.collection('products');
//     let response=await collection.find({name:'m 40'}).toArray();

//     console.log(response);
// }
// getData();
//                                              Read Data from MongoDB

// const {MongoClient}=require('mongodb');

// const url='mongodb://localhost:27017';
// const database='e-comm'
// const client=new MongoClient(url);

// async function dbConnect(){
//     let result=await client.connect();
//     let db=result.db(database);
//     return db.collection('products');

// }
                                    // `1st thing to handle promisess`
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })

                        //2 nd thing to handle promisses

// const main=async()=>{
//     let data=await dbConnect();
//     data=await data.find().toArray();
//     console.warn(data);
// }
// main();

                //make a ne file name MongoDb (for making short)
        //views-->

const main=async()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.warn(data);
}
main();








