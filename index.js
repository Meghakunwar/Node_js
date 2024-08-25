                       
const http=require('http');
const data=require('/data')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});            //201,500,400
    resp.write(JSON.stringif(data));
    resp.end();
}).listen(300);  



