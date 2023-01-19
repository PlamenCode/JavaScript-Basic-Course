function attachGradientEvents() {
   const gradient = document.getElementById('gradient');
   gradient.addEventListener('mousemove', onMove);
   const result = document.getElementById('result');

   function onMove(ev){
    result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    
   }

}