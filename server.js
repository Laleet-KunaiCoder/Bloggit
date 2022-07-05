const http  = require('http');
const fs = require('fs');
const _=require('lodash')

const server = http.createServer((req,res)=>{
    //lodash
    const num=_.random(0,20);
    console.log(num);
    const greet =_.once(()=>{
        console.log("hello");
    });
    greet();
    greet();
    res.setHeader('Content-Type','text/html');
    let path = './views/';
    switch(req.url){
        case '/':
            path+='index.html'
            res.statusCode=200
            break;
        case'/about':
        path+='about.html';
        res.statusCode=200
        break;
        case '/about-me':
            res.statusCode=301
            res.setHeader('location','/about');
            res.end()
        default:
        path+='404.html';
        res.statusCode=404
        break;
    }
    //set header content type 
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data);
            res.end();
        }
    })
    //res.write('<head><link rel="styleseet"</link></head>')
    //res.write('<h1>Hello world</h1>')
    //res.end()
});
server.listen(3000,'localhost',
()=>{console.log('listening for request on port 3000')}) 