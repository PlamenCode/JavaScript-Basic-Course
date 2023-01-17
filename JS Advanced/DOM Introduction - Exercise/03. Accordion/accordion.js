function toggle() {
    let buttonName = document.querySelector('span.button');
    let hidden = document.getElementById('extra');

    if(buttonName.textContent == 'More'){
        hidden.style.display = 'block';
        buttonName.textContent = 'Less';
    } else if(buttonName.textContent == 'Less'){
        hidden.style.display = 'none';
        buttonName.textContent = 'More'
    }
}