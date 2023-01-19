function addItem() {
  const itemText = document.getElementById('newItemText');
  const itemValue = document.getElementById('newItemValue');

  const optionItem = document.createElement('option');
  optionItem.textContent = itemText.value;
  optionItem.value = itemValue.value;

  document.getElementById('menu')
          .appendChild(optionItem);

  itemText.value = '';
  itemValue.value = '';
}