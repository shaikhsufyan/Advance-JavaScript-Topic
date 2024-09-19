 document.querySelector(".grandParent")
 .addEventListener("click", (e)=>{
    console.log("Grand-Parent Clicked!");
     
    e.stopPropagation()
    
 },true)
 document.querySelector(".parent")
 .addEventListener("click", (e)=>{
    console.log("Parent Clicked!");
    e.stopPropagation()
     
    
 },true)
 document.querySelector(".child")
 .addEventListener("click", (e)=>{
    console.log("Child Clicked!");
    e.stopPropagation()
    
 },true)