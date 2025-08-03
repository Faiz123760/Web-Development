// this is a code we can create own Server

const http=require('http')

const Host = 'localhost'
const Port=8000



const requestHandler = function (request,response){
    
    console.log(request.method,request.url);
    switch(request.url){
        case '/':
            response.end("<h1>Welcome to the Node Server....</h1>")
            break
        case '/home':
                response.end("<h1>Welcome to the Home Server....</h1>")
                break
        case '/about':
            response.end("<h1>Welcome to the Node Server....</h1>")
         case '/Contactus':
             response.end("<h1>Welcome to the Node Server....</h1>")
             break;
        default:
            response.end("<h1>Error Occured....</h1>")
            break;
    }
    
     
}

const server=http.createServer(requestHandler)
server.listen(Port,Host,(err)=>{

    //localHost:8000
    if(err)
        console.log("Server not Started"+err);
    else
        console.log(`Server Running at http://${Host}:${Port}`);
        
        
})