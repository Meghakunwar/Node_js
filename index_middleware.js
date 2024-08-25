// const express=require('express');
// const app=express();

// const reqFilter=(req,resp,next)=>{              
//     // console.log('reqFilter');
//     // next();
//     if(!req.query.age){
//         resp.send("please provide age");
//         next();

//     }
//     else if(req.query.age<18){
//         resp.send("you can n0t accesss this page");
//     }
//     else{
//         next();
//     }
// }
// app.use(reqFilter)

// app.get('/',(req,resp)=>{
//     resp.send("welcome to home page")
// })
// app.get('/user',(req,resp)=>{
//     resp.send("welcome to user page")
// })
// app.listen(278);



// const express=require('express');
// const app=express();

// const reqFilter=(req,resp,next)=>{              
//     // console.log('reqFilter');
//     // next();
//     if(!req.query.age){
//         resp.send("please provide age");
//         next();

//     }
//     else if(req.query.age<18){
//         resp.send("you can n0t accesss this page");
//     }
//     else{
//         next();
//     }
// }
// // app.use(reqFilter)

// app.get('/',(req,resp)=>{
//     resp.send("welcome to home page")
// })
// app.get('/user',reqFilter,(req,resp)=>{
//     resp.send("welcome to user page")
// })
// app.get('/about',reqFilter,(req,resp)=>{
//     resp.send("welcome to about page")
// })
// app.listen(279);


const express=require('express');
const app=express();
const reqFilter=require('./middleware');
const route=express.Router();
// app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send("welcome to home page")
})
route.get('/user',(req,resp)=>{
    resp.send("welcome to user page")
})
route.get('/about',(req,resp)=>{
    resp.send("welcome to about page")
})
app.use('/',route);
app.listen(232);


