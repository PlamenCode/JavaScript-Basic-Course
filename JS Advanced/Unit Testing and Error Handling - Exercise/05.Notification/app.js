function notify(message) {
  let div = document.getElementById('notification');
  div.innerText = message;
  div.style.display = 'block';
  div.addEventListener('click', onClick);
  
  function onClick(ev){
    ev.target.style.display = 'none';
  }
}