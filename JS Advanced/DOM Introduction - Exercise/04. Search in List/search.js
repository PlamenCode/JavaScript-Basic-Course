function search() {
   let list = document.querySelectorAll('ul#towns li');
   let resultEl = document.getElementById('result');
   let inputText = document.getElementById('searchText').value;
   let matches = 0;

   for (let element of list) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
   }

   for (let element of list) {
      let text = element.textContent;
      if(text.includes(inputText)){
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   resultEl.textContent = `${matches} matches found`
}
