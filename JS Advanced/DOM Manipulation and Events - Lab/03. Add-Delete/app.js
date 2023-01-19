function addItem() {
    const input = document.getElementById('newItemText');
    const liEl = document.createElement('li');
    const UlList = document.getElementById('items');

    liEl.textContent = input.value;
    UlList.appendChild(liEl);

    const deleteEl = document.createElement('a');
    deleteEl.textContent = '[Delete]';
    deleteEl.href = '#';
    deleteEl.addEventListener('click', onDel);

    liEl.appendChild(deleteEl);

    input.value = '';

    function onDel(action){
        action.target.parentElement.remove()
    }

}