
window.addEventListener('DOMContentLoaded',(event)=>{

  let sub =document.querySelector("button")
  let unit = document.getElementById("text")
  let A = "http://localhost/comp2245-assignment4/superheroes.php?set="
  sub.onclick= function(){Act()}

  function Act(){
      fetch(A+unit.value)
          .then(response =>  response.text())
          .then(data =>{
      let set = document.querySelector(".hero")
      set.innerHTML= data  
          })

      .catch(error =>console.log(error))
      
  };

});