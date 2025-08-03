const fs = require('fs')
//let str = 'Happiness depends upon ourselves.” Aristotle. It is not length of life, but depth of life.'
// let str = "The mind is everything. What you think you become."
//fs.writeFileSync('sync.txt',str + '\n')

// const data=fs.readFileSync('sync.txt')
// console.log(data.toString());

// fs.appendFileSync('sync.txt',str + '\n')


//to delete the file

// fs.unlink('sync.txt' ,(err) => {
//    if(err)
//     console.log(err);
//   else
//     console.log("File Deleted");
// })

//to check file is exist or not 

// if(fs.existsSync('sync.txt')){
//     fs.unlink('sync.txt' ,(err) => {
//    if(err)
//     console.log(err);
//   else
//     console.log("File Deleted");
// })
// }
// else{
//     console.log("File doest exist");
    
// }


// to make folder and also check it exixt or not if not exist then Create it


// if(!fs.existsSync('DemoFolder')){
// fs.mkdir('DemoFolder',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully Created");
// })
// }
// else{
//     console.log("Folder Already Exist");
    
// }

// to Remove the folder and also check it exixt or not if not exist then delete it
if(fs.existsSync('DemoFolder')){
fs.rmdir('DemoFolder',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder Deleted");
        
    }
})}
   else{
    console.log("Dosnt Exist");
    
}



