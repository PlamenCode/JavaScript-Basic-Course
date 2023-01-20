function solve() {
  const buttons = document.getElementsByTagName('button');

  const generateBtn = buttons[0];
  const buyBtn = buttons[1];
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click',buy)
  
  const textAreas = document.getElementsByTagName('textarea');
  const generateTextArea = textAreas[0];
  const buyTextArea = textAreas[1];
  
  
  function generate(ev){
    const itemsInfo = generateTextArea.value;
    for (let line of itemsInfo) {

    }

  }

  function buy(ev){

  }
}