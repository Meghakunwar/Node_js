// console.log("megha");
// var a=10;
// var b =23;
// var c=90;
// console.log(a+b+c);


// const app =require('./app')
// const arr=[1,2,3,4,5,6];
// console.log(arr[0])


//  const app =require('./app')
// console.log(app)
// console.log(app.x)
// console.log(app.y)
// console.log(app.z)
                                        //FILTER 

// const app=require('./app')
//  const arr=[1,2,3,4,5,6];
//  arr.filter((item)=>{

//     console.log(item)
//  })


 
// const app=require('./app')
// const arr=[1,2,3,4,5,6];
// let result=arr.filter((item)=>{
//     return item ===3
// })
//      console.log(result)

                                            //module(core->global,no global)
// const fs=require('fs');
// console.log("code");
// fs.writeFileSync("hii.txt","ku  btau");

// const fs=require('fs');
// console.log("...>",_dirname);

// const fs=require('fs');
// console.log("...>",_filename);



// const fs=require('fs').writeFileSync;
// fs("abc.txt","filename");


// const http=require('http');
// http.createServer((req,resp)=>{
//    resp.write("<h1>meghaaa</h1>");
//     Resp.end();
// }).listen(360);


// const http=require('http');
// function dataControl(req,resp){
//     resp.write("<h1>meghaaa kunwar</h1>");
//      resp.end();
// }

// http.createServer(dataControl).listen(321);
    



// var colors = require('colors');
// console.log("heloo".red);
// console.log("heloo".bgBlue);
// console.log("heloo".black);



// console.log(process)
// console.log(process.argv)
// console.log(process.argv[2])


// const { clear } = require('console');
// const fs=require('fs');
// const input=process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])

// }
// else{
//     console.log('invali')
// }



// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'files');
// // for(i=0;i<5;i++){
// //     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple txt file");
// // }
// fs.readdir(dirpath,(error,files)=>{
//     // console.warn(files)
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })


                        //CruD(create ,read ,update,delete)

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/banana.txt`;
                        //Create
// fs.writeFileSync(filePath,'this is a simple text path');

                    //Read
// fs.readFile(filePath,'utf8',(error,item)=>{
//     console.log(item);
// })

                     //update

// fs.appendFile(filePath,'ku btauuuu is Banana.txt',(err)=>{
//     if(!err)console.log("file is updated");
// })
                //Rename
// fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
//     if(!err)console.log("renamed");
// })

                    //delete
// fs.unlinkSync(`${dirPath}/fruits.txt`);


                    //Asynchronous ans Synchronous

console.log("start exe....");
setTimeout(()=>{
    console.log("logic esxe");
},2000)
console.log("completed");


// let a=10;
// let b=0;
// setTimeout(()=>{
//     b=20;
// },2000)
// console.log(a+b);      //--->  //drowback
                    

                            // how to Handle Asynchronous Data in Node Js\
                // let a=10;
                // let b=0;
               
                // let waitingData=new Promise((resolve,reject)=>{
                //     setTimeout(()=>{
                //         // b=30;
                //         resolve(30)
                //     },2000)                  
                // })
                // waitingData.then((data)=>{
                //     // b=data;
                //     console.log(a+data); 
                // })
          

// console.log("starting up");
// setTimeout(()=>{
//     console.log("2 sec");
// },2000)

// setTimeout(()=>{
//     console.log("0 sec");
// },0)
// console.log("end");
                  

