// const express =require('express');
// const app=express();
// app.get('',(req,resp)=>{
//     resp.send("hello ,this is home page");
//     console.log("data sent by browser",req.query.name);
//     resp.send("welcome",+req.query.name);
// });
// app.get('/about',(req,resp)=>{
//     resp.send("hello ,this is about page");
// });
// app.get('/ab',(req,resp)=>{
//     resp.send("hello ,this is ab page");
// });
// app.listen(368);

                                                        //html tags
// const express =require('express');
// const app=express();
// app.get('',(req,resp)=>{
//     resp.send("<h1>hello ,this is home page<h1>");
//     console.log("data sent by browser",req.query.name);
//     resp.send("welcome",+req.query.name);
// });
// app.get('/about',(req,resp)=>{
//     resp.send(`
//         <input type="text" placeholder="user name"/>
//         `);
// });
// app.get('/ab',(req,resp)=>{
//     resp.send(`
//        {
//         Name:'megha',email:'ku btua@test.com',
//         },
//        {
//         name :'nik'
//        }

//         `);
// });
// app.listen(147);
                                                //move one page to another

// const express =require('express');
// const app=express();
// app.get('',(req,resp)=>{
//     resp.send(`
//         <h1>hello ,this is home page<h1>
//         <a href="/about">go to about</a>
        
//         `);
//     console.log("data sent by browser",req.query.name);
//     resp.send("welcome",+req.query.name);
// });
// app.get('/about',(req,resp)=>{

//     resp.send(`
//         <input type="text" placeholder="user name" value="${req.query.name}"/>
//         <a href="/about">go to home</a>
//         `);

// });
// app.get('/ab',(req,resp)=>{
//     resp.send(`
//        {
//         Name:'megha',email:'ku btua@test.com',
//         },
//        {
//         name :'nik'
//        }

//         `);
// });
// app.listen(149);                      


// const express =require('express');
// const path=require('path');
// const app=express();                             
// const PublicPath=path.join(__dirname,'public');
// // console.log(PublicPath);

// app.use(express.static(PublicPath));             
                        
                                                //localhost:500/about.html
                                                            //  |
                                                            //  |
                                                    //to remove this extension from url

// const express =require('express');
// const path=require('path');
// const app=express();                             
// const PublicPath=path.join(__dirname,'public');
// app.get('',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/index.html`)
// })
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/about.html`)
// })
// app.get('/help',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/help.html`)
// })
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/pagenotFound.html`)
// })
// app.listen(4006);
    
                                    //EJS

const express =require('express');
const path=require('path');
const app=express();                             
const PublicPath=path.join(__dirname,'public');

app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.sendFile(`${PublicPath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${PublicPath}/about.html`)
})
app.get('/profile',(_,resp)=>{
//    
        const user={
            name:'megha',
            email:"abh@test.com",
            skills:['php','js','c++']
        }
        resp.render('profile',{user});
 })
 app.get('/login',(_,resp)=>{

            resp.render('login');
     })
app.get('/login',(_,resp)=>{
    resp.sendFile(`${PublicPath}/login.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${PublicPath}/pagenotFound.html`)
})

app.listen(403);
    