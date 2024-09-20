//  let obj1 = {
//     name : "Sufyan Shaikh"
//  }

// //  let obj2 = Object.assign({},obj1);
// let obj2 = {...obj1}
//  obj2.name="Aman"

//  console.log("Object 1 :",obj1);
 
//  console.log("Object 2 :",obj2);
 



let obj1 = {
    name : "Sufyan Shaikh",
    detail:{
        proff:"SE",
        city:"Pune"
    },
    info:function(){
        console.log("Function Running");
    }
 }

//  let obj2 = JSON.parse(JSON.stringify(obj1));
let obj2 = _.cloneDeep(obj1)
 
 obj2.detail.city="Indore"

 console.log("Object 1 :",obj1);
 
 console.log("Object 2 :",obj2);