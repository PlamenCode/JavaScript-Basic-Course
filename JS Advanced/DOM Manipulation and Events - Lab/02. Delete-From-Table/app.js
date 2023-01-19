function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let isFound = false;
    for(const row of rows){
        if(row.children[1].textContent == input){
            const parent = row.parentElement;
            parent.removeChild(row);
            isFound = true;
        }
    }

    let result = document.getElementById('result');
    if(isFound){
        result.textContent = 'Deleted.'
    } else{
        result.textContent = 'Not found.'
    }
}