//  document.getElementById("parent")
//  .addEventListener("click", (event)=>{
//     console.log(event.target.id);
//     if(event.target.tagName == "LI"){
//         window.location.href="/"+event.target.id
//     }

//  })


document.getElementById("forms")
.addEventListener("keyup", (event)=>{
    console.log(event.target.dataset.uppercase);

    if(event.target.dataset.uppercase != undefined){
        event.target.value = event.target.value.toUpperCase()
    }
    
})