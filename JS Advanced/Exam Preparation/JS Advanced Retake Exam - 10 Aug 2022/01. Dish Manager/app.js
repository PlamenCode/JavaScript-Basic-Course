window.addEventListener("load", solve);

function solve() {

  let firtsNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let genderInput = document.getElementById('genderSelect');
  let dishDescriptionInput = document.getElementById('task');

  let counter = document.getElementById('progress-count');
  let count = 0;

  let progressSection = document.getElementById('in-progress');
  let finishedSection = document.getElementById('finished');

  let submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', onSubmit);

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', onClear);

  
  function onSubmit(ev){
    ev.preventDefault();
    
    if(firtsNameInput.value == '' || lastNameInput.value == '' || ageInput.value == ''
    || genderInput.value == '' || dishDescriptionInput.value == ''){
      return;
    }
    
    count++
    counter.textContent = count;

    let liElementProgress = document.createElement('li');
    liElementProgress.classList.add('each-line');
    let articleElementProgress = document.createElement('article');

    let h4ElProgress = document.createElement('h4');
    h4ElProgress.textContent = `${firtsNameInput.value} ${lastNameInput.value}`;
    
    let nameAgeP = document.createElement('p');
    nameAgeP.textContent = `${genderInput.value}, ${ageInput.value}`;

    let descriptionProgress = document.createElement('p');
    descriptionProgress.textContent = `Dish description: ${dishDescriptionInput.value}`;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', onEdit);

    let complateBtn = document.createElement('button');
    complateBtn.textContent = 'Mark as complete';
    complateBtn.classList.add('complete-btn');
    complateBtn.addEventListener('click', onComplete);

    articleElementProgress.appendChild(h4ElProgress);
    articleElementProgress.appendChild(nameAgeP);
    articleElementProgress.appendChild(descriptionProgress);
    
    liElementProgress.appendChild(articleElementProgress);
    liElementProgress.appendChild(editBtn);
    liElementProgress.appendChild(complateBtn);

    progressSection.appendChild(liElementProgress);

    let firstNameSave = firtsNameInput.value;
    let lastNameSave = lastNameInput.value;
    let ageSave = ageInput.value;
    let genderSave = genderInput.value;
    let dishDescriptionSave = dishDescriptionInput.value;

    firtsNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    dishDescriptionInput.value = '';
    genderInput.value = 'Male';


    function onEdit(ev){
      ev.preventDefault();

      count--;
      counter.textContent = count;

    let target = ev.target;
    let element = target.parentElement;
    element.remove();

    firtsNameInput.value = firstNameSave;
    lastNameInput.value = lastNameSave;
    ageInput.value = ageSave;
    genderInput.value = genderSave;
    dishDescriptionInput.value = dishDescriptionSave;

    }

    function onComplete(ev){
      ev.preventDefault();

      count--;
      counter.textContent = count;

      let target = ev.target;
      let element = target.parentElement;
      element.remove();
      editBtn.remove();
      complateBtn.remove();
      finishedSection.appendChild(element);
    }

  }
  function onClear(ev){
    ev.preventDefault();

    finishedSection.innerHTML = '';
  }

}
