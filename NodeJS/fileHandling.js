
const fs = require('fs')
  // fs.readFile('Test.txt',(err,data)=>{
  //  if(err)
  //      console.log("Error Occured..."+err);
  //  else
  //      console.log(data.toString());
  //})



  //when we write in file if dile does not exist it ceate by default then Write


  //let str ="When we use any file data in the another file then firstly we export the filedata and then require in the next file"
  //fs.writeFile('Test.txt',str +'\n',(err) =>{
  //  if(err)
  //      console.log(err);
  //})

  

  let str ="jwefuwgbbu9foiijubn uigfb7fn89wpfy uigvdby ugup"
  fs.appendFile('Test.txt',str + "\n" , (err)=>{
    if(err)
        console.log("Error Occured..."+err);
    else
        console.log('Data Append in Files');

  })