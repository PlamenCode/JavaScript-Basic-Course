function solve() {
    let recipantNameInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messegeInput = document.getElementById('message');

    const addBtn = document.getElementById('add');
          addBtn.addEventListener('click', onAdd);

    const resetBtn = document.getElementById('reset');
          resetBtn.addEventListener('click', onReset);

    let ulElListMails = document.getElementById('list');
    let sendMailEl = document.querySelector('.sent-list');
    let deletedMail = document.querySelector('.delete-list');


    function onAdd(ev){
        ev.preventDefault();

        if( recipantNameInput.value == ''
            || titleInput.value == ''
            || messegeInput.value == '') {
            return;
        }

        let liToAdd = document.createElement('li');

        let titleEl = document.createElement('h4');
            titleEl.textContent = `Title: ${titleInput.value}`;
        
        let recipientName = document.createElement('h4');
            recipientName.textContent = `Recipient Name: ${recipantNameInput.value}`;

        let messegeSpan = document.createElement('span');
            messegeSpan.textContent = messegeInput.value;

        let divBtns = document.createElement('div');
            divBtns.classList.add('list-action');

        let delBtn = document.createElement('button');
            delBtn.setAttribute('type', 'submit');
            delBtn.setAttribute('id', 'delete');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onDel);

        let sendBtn = document.createElement('button');
            sendBtn.setAttribute('type', 'submit');
            sendBtn.setAttribute('id', 'send');
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', onSend);

        divBtns.appendChild(sendBtn);
        divBtns.appendChild(delBtn);

        liToAdd.appendChild(titleEl);
        liToAdd.appendChild(recipientName);
        liToAdd.appendChild(messegeSpan);
        liToAdd.appendChild(divBtns);

        ulElListMails.appendChild(liToAdd)

        let saveRecipantName = recipantNameInput.value;
        let saveTitle = titleInput.value;
        let saveMessege= messegeInput.value;

        recipantNameInput.value = '';
        titleInput.value = '';
        messegeInput.value = '';


        function onSend(ev){
            ev.preventDefault();
            
            let liToSend = document.createElement('li');
            
            let nameSpan = document.createElement('span');
            nameSpan.textContent = `To: ${saveRecipantName}`;
            
            let titleSpan = document.createElement('span');
            titleSpan.textContent = `Title: ${saveTitle}`;
            
            let divBtn = document.createElement('div');
            divBtn.classList.add('btn');
            
            let delBtn = document.createElement('button');
            delBtn.setAttribute('type', 'submit');
            delBtn.setAttribute('class', 'delete');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onDel);
            
            divBtn.appendChild(delBtn);
            
            liToSend.appendChild(nameSpan);
            liToSend.appendChild(titleSpan);
            liToSend.appendChild(divBtn);
            
            sendMailEl.appendChild(liToSend);
    
            let target = ev.target;
            target.parentElement.parentElement.remove();
        };

        function onDel(ev){
            ev.preventDefault();
    
            let li = document.createElement('li');
        
            let spanOne = document.createElement('span');
               spanOne.textContent = `To: ${saveRecipantName}`;
    
            let spanTwo = document.createElement('span');
                spanTwo.textContent = `Title: ${saveTitle}`;

            li.appendChild(spanOne);
            li.appendChild(spanTwo);

            deletedMail.appendChild(li);
    
            let target = ev.target;
            target.parentElement.parentElement.remove();
            
        }  
    }
    
    function onReset(ev){
        ev.preventDefault();
    
        recipantNameInput.value = '';
        titleInput.value = '';
        messegeInput.value = '';
    }    
    
}
solve()