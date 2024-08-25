module.exports=reqFilter=(req,resp,next)=>{              
    // console.log('reqFilter');
    // next();
    if(!req.query.age){
        resp.send("please provide age");
        next();

    }
    else if(req.query.age<18){
        resp.send("you can n0t accesss this page");
    }
    else{
        next();
    }
}