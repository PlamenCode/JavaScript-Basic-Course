function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let rows = document.querySelectorAll('tbody tr');
   let inputData = document.getElementById('searchField');

   function onClick() {
      
      for (let row of rows) {
         row.classList.remove('select');
         if(row.innerHTML.includes(inputData.value)){
            row.className = 'select';
         }
      }
      inputData.value = '';
   }
}