window.addEventListener('load', solve);

function solve() {
    
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let checkInDate = document.getElementById('date-in');
    let checkOutDate = document.getElementById('date-out');
    let countPeople = document.getElementById('people-count');

    let nextBtn = document.getElementById('next-btn');
    let reservInfoBox = document.querySelector('.info-list');
    let confirmListEl = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');


    nextBtn.addEventListener('click', onNext);
    function onNext(ev){
        ev.preventDefault();
        if(firstName.value == '' 
        || lastName.value == '' 
        || checkInDate.value == '' 
        || checkOutDate.value == '' 
        || countPeople.value == '' 
        || checkInDate.value > checkOutDate.value){
            return;
        }
        
        //create reservation list Items
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        let dateIn = document.createElement('p');
        dateIn.textContent = `From date: ${checkInDate.value}`;
        let dateOut  = document.createElement('p');
        dateOut.textContent = `To date: ${checkOutDate.value}`;
        let people = document.createElement('p');
        people.textContent = `For ${countPeople.value} people`;

        //creating article
        let articleToAdd = document.createElement('article');
        articleToAdd.appendChild(h3);
        articleToAdd.appendChild(dateIn);
        articleToAdd.appendChild(dateOut);
        articleToAdd.appendChild(people);

        //creating buttons for the li (reservation-content)
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editClick);
        
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click',continueClick);

        
        //creating li and adding article
        let liItemToAdd = document.createElement('li');
        liItemToAdd.setAttribute('class', 'reservation-content');
        liItemToAdd.appendChild(articleToAdd);
        liItemToAdd.appendChild(editBtn);
        liItemToAdd.appendChild(continueBtn);

        reservInfoBox.appendChild(liItemToAdd);

        //creating copy of the elements content
        let editFirstName = firstName.value;
        let editLastName = lastName.value;
        let editDateIn = checkInDate.value;
        let editDateOut = checkOutDate.value;
        let editCountElement = countPeople.value;

        //seting the first box to empty
        firstName.value = '';
        lastName.value = '';
        checkInDate.value = '';
        checkOutDate.value = '';
        countPeople.value = '';

        //dissable the Next Btn
        nextBtn.disabled = true;


        function editClick(){
        
            firstName.value = editFirstName;
            lastName.value = editLastName;
            checkInDate.value = editDateIn;
            checkOutDate.value = editDateOut;
            countPeople.value = editCountElement;

            liItemToAdd.remove();
            nextBtn.disabled = false;
        }


        function continueClick(){

            let liElCon = document.createElement('li');
            liElCon.setAttribute('class', 'reservation-content');

            let articleContinue = document.createElement('article');
            articleContinue = articleToAdd;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.addEventListener('click', onConfirm);

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', onCancel);

            liElCon.appendChild(articleContinue);
            liElCon.appendChild(confirmBtn);
            liElCon.appendChild(cancelBtn);
            liItemToAdd.remove();

            confirmListEl.appendChild(liElCon);

            function onConfirm(){
                liElCon.remove();
                nextBtn.disabled = false;

                verification.setAttribute('class', 'reservation-confirmed');
                verification.textContent = 'Confirmed.';
            }

            function onCancel(){
                liElCon.remove();
                nextBtn.disabled = false;

                verification.setAttribute('class', 'reservation-cancelled');
                verification.textContent = 'Cancelled.'
            }
        }
    }
}



    
    
