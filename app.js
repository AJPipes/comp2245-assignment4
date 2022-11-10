
window.onload = () => {

  const btn = document.getElementById("search");
  const textfield = document.getElementById("search");
  const result = document.getElementById("result");
  let httpRequest = new XMLHttpRequest();
  let url = 'superheroes.php';

  btn.addEventListener('click', search);

  function search()
  {
    let data = textfield.value;
    let ext = '?query='+data;
    httpRequest.onreadystatechange = requestaction;
    httpRequest.open('GET', url+ext, true);
    httpRequest.send();
  }

  function requestaction()
  {
    if(httpRequest.readyState === XMLHttpRequest.DONE)
    {
      if(httpRequest.status === 200)
      {

          let response = httpRequest.responseText;
          result.innerHTML = response;

        }
        else
        {

          alert('There is a problem with the request');

        }
    }
  }
}