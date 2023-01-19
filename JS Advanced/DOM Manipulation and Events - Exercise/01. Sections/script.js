function create(words) {
   const div = document.getElementById('content');
   
   for (let word of words) {
      
      let divEl = document.createElement('div');
      let p = document.createElement('p');
      let text = word;

      p.textContent = text;
      p.style.display = 'none'
      divEl.appendChild(p);
      div.appendChild(divEl);

      divEl.addEventListener('click', onClick)

      function onClick(ev){
         ev.target.children[0].style.display = 'block'
      }
   }
}