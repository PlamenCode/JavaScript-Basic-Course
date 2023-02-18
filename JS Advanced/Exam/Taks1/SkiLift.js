window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let peopleCount = document.getElementById('people-count');
    let fromDate = document.getElementById('from-date');
    let days = document.getElementById('days-count');

    let nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', onNextStep);

    let infoTicketUl = document.querySelector('.ticket-info-list');
    let confrimUl = document.querySelector('.confirm-ticket');
    let mainDiv = document.getElementById('main'); 


    function onNextStep(ev){
        ev.preventDefault();

        if(firstName.value == ''
        || lastName.value == ''
        || peopleCount.value == ''
        || fromDate.value == ''
        || days.value == ''){
            return;
        };

        let li = document.createElement('li');
            li.classList.add('ticket');

        let article = document.createElement('article');

        let nameH3 = document.createElement('h3');
            nameH3.textContent = `Name: ${firstName.value} ${lastName.value}`;

        let dateP = document.createElement('p');
            dateP.textContent = `From date: ${fromDate.value}`;

        let daysCountP = document.createElement('p');
            daysCountP.textContent = `For ${days.value} days`;

        let peopleP = document.createElement('p');
            peopleP.textContent = `For ${peopleCount.value} people`;

        article.appendChild(nameH3);
        article.appendChild(dateP);
        article.appendChild(daysCountP);
        article.appendChild(peopleP);

        let editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = `Edit`;
            editBtn.addEventListener('click', onEdit);

        let continueBtn = document.createElement('button');
            continueBtn.classList.add('continue-btn');
            continueBtn.textContent = `Continue`;
            continueBtn.addEventListener('click', onContinue);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        infoTicketUl.appendChild(li);

        nextStepBtn.disabled = true;

        let saveFirstName = firstName.value;
        let saveLastName = lastName.value;
        let savePeopleCount = peopleCount.value;
        let saveFromDate = fromDate.value;
        let saveDays = days.value;

        firstName.value = '';
        lastName.value = '';
        peopleCount.value = '';
        fromDate.value = '';
        days.value = '';


        function onEdit(ev){
            ev.preventDefault();

            nextStepBtn.disabled = false;

            firstName.value = saveFirstName;
            lastName.value = saveLastName;
            peopleCount.value = savePeopleCount;
            fromDate.value = saveFromDate;
            days.value = saveDays;

            infoTicketUl.innerHTML = '';
            
        };


        function onContinue(ev){
            ev.preventDefault();

            infoTicketUl.innerHTML = '';

            let liCon = document.createElement('li');
                liCon.classList.add('ticket');

            let articleCon = document.createElement('article');

            let nameH3Con = document.createElement('h3');
                nameH3Con.textContent = `Name: ${saveFirstName} ${saveLastName}`;

            let datePCon = document.createElement('p');
                datePCon.textContent = `From date: ${saveFromDate}`;

            let daysCountPCon = document.createElement('p');
                daysCountPCon.textContent = `For ${saveDays} days`;

            let peoplePCon = document.createElement('p');
                peoplePCon.textContent = `For ${savePeopleCount} people`;

            articleCon.appendChild(nameH3);
            articleCon.appendChild(dateP);
            articleCon.appendChild(daysCountP);
            articleCon.appendChild(peopleP);

            let confirmBtn = document.createElement('button');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = `Confirm`;
                confirmBtn.addEventListener('click', onConfirm);

            let cancelBtn = document.createElement('button');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = `Cancel`;
                cancelBtn.addEventListener('click', onCancel);

            liCon.appendChild(articleCon);
            liCon.appendChild(confirmBtn);
            liCon.appendChild(cancelBtn);

            confrimUl.appendChild(liCon);


            function onConfirm(ev){
                ev.preventDefault();

                mainDiv.innerHTML = '';
                let h1 = document.createElement('h1');
                    h1.classList.add('thank-you');
                    h1.textContent = "Thank you, have a nice day! ";

                    mainDiv.appendChild(h1);

                    let button = document.createElement('button');
                        button.classList.add('back-btn');
                        button.textContent = 'Back';
                        button.addEventListener('click', reload);

                    mainDiv.appendChild(button)

                function reload(){
                    window.location.reload();

                };
            };

            function onCancel(ev){
                ev.preventDefault();
                confrimUl.innerHTML = '';

                nextStepBtn.disabled = false;
            }
        };
    };
}


    
    
