function addItem() {
    const input = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');

    liElement.textContent = input;

    const ulList = document.getElementById('items');
    ulList.appendChild(liElement);

    input.value = '';
}