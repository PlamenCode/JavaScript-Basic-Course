function solve() {
    let inputFirstName = document.getElementById('fname');
    let inputLastName = document.getElementById('lname');
    let inputEmail = document.getElementById('email');
    let inputDateOfBirth = document.getElementById('birth');
    let inputPosition = document.getElementById('position');
    let inputSalary = document.getElementById('salary');

    let table = document.getElementById('tbody');
    let sum = document.getElementById('sum');
    let total = 0;

    let hireBtn = document.getElementById('add-worker');
        hireBtn.addEventListener('click', onHire);

    function onHire(ev){
        ev.preventDefault();
        if(inputFirstName.value == '' 
        || inputLastName.value == ''
        || inputEmail.value == ''
        || inputDateOfBirth.value == ''
        || inputPosition.value == ''
        || inputSalary.value == ''){
            return;
        };

        let tr = document.createElement('tr');

        let firstNameTd = document.createElement('td');
            firstNameTd.textContent = `${inputFirstName.value}`;

        let lastNameTd = document.createElement('td');
            lastNameTd.textContent = `${inputLastName.value}`;

        let emailTd = document.createElement('td');
            emailTd.textContent = `${inputEmail.value}`;

        let dateTd = document.createElement('td');
            dateTd.textContent = `${inputDateOfBirth.value}`;

        let positionTd = document.createElement('td');
            positionTd.textContent = `${inputPosition.value}`;

        let salaryTd = document.createElement('td');
            salaryTd.textContent = `${inputSalary.value}`;

        let btns = document.createElement('td');

        let firedBtn = document.createElement('button');
            firedBtn.textContent = 'Fired';
            firedBtn.classList.add('fired');
            firedBtn.addEventListener('click', onFired);

        let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit');
            editBtn.addEventListener('click', onEdit);

        btns.appendChild(firedBtn);
        btns.appendChild(editBtn);

        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        tr.appendChild(btns);

        table.appendChild(tr);

        let saveFirstName = inputFirstName.value;
        let saveLastName = inputLastName.value;
        let saveEmail = inputEmail.value;
        let saveDate = inputDateOfBirth.value;
        let savePosition = inputPosition.value;
        let saveSalary = inputSalary.value;
        
        inputFirstName.value = '';
        inputLastName.value = '';
        inputEmail.value = '';
        inputDateOfBirth.value = '';
        inputPosition.value = '';
        inputSalary.value = '';

        total += Number(saveSalary);
        sum.textContent = total.toFixed(2);

        function onEdit(ev){
            ev.preventDefault();

            let element = ev.target.parentElement.parentElement;
            total -= saveSalary;
            sum.textContent = total.toFixed(2);

            element.remove();

            inputFirstName.value = saveFirstName;
            inputLastName.value = saveLastName;
            inputEmail.value = saveEmail;
            inputDateOfBirth.value = saveDate;
            inputPosition.value = savePosition;
            inputSalary.value = saveSalary;
        };

        function onFired(ev){
            ev.preventDefault();

            let element = ev.target.parentElement.parentElement;
            total -= saveSalary;
            sum.textContent = total.toFixed(2);

            element.remove();
        }
    }
}
solve()