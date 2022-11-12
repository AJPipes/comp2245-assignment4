
window.addEventListener('DOMContentLoaded',(event)=>{

  let input =document.querySelector("button")
  let type = document.getElementById("searching")
  let url = "http://localhost/comp2245-assignment4/superheroes.php?set="
  input.onclick= function(){Marvel()}

  function Marvel(){
      fetch(url+type.value)
          .then(response =>  response.text())
          .then(data =>{
      let set = document.querySelector(".hero")
      set.innerHTML= data  
          })

      .catch(error =>console.log(error))
      
  };

});