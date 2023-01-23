function solve() {
    const addButton = document.getElementById('add');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    addButton.addEventListener('click', onClick);

    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let complate = document.getElementsByTagName('section')[3];

    function onClick(ev){
        ev.preventDefault();
       if(date.value && task.value && description.value){

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let firstP = document.createElement('p');
        let secondP = document.createElement('p');
        let div = document.createElement('div');
        let greenBtn = document.createElement('button');
        let redBtn = document.createElement('button');

        h3.textContent = task.value;
        firstP.textContent = description.value;
        secondP.textContent = date.value;

        div.setAttribute('class', 'flex');
        greenBtn.setAttribute('class', 'green');
        redBtn.setAttribute('class', 'red');
        div.appendChild(greenBtn);
        div.appendChild(redBtn);

        article.appendChild(h3);
        article.appendChild(firstP);
        article.appendChild(secondP);
        article.appendChild(div);

        open.appendChild(article)
        
       }
    }
}