window.addEventListener("load", solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let ageInput = document.getElementById('age');
    let storyTitleInput = document.getElementById('story-title');
    let genreInput = document.getElementById('genre');
    let storyTextInput = document.getElementById('story');

    let publishBtn = document.getElementById('form-btn');
    let previewList = document.getElementById('preview-list');

    let mainDiv = document.getElementById('main');

    publishBtn.addEventListener('click', onPublish);

    function onPublish(ev){
      ev.preventDefault();

      if(firstNameInput.value == '' 
      || lastNameInput.value == '' 
      || ageInput.value == '' 
      || storyTitleInput.value == '' 
      || genreInput.value == '' 
      || storyTextInput.value == ''){
        return;
      }

      let liPreview = document.createElement('li');
      liPreview.setAttribute('class', 'story-info');

      let articlePreview = document.createElement('article');

      let h4Article = document.createElement('h4');
          h4Article.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
      articlePreview.appendChild(h4Article);

      let ageP = document.createElement('p');
          ageP.textContent = `Age: ${ageInput.value}`;
      articlePreview.appendChild(ageP);

      let titleP = document.createElement('p');
          titleP.textContent = `Title: ${storyTitleInput.value}`;
      articlePreview.appendChild(titleP);
      
      let genreP = document.createElement('p');
          genreP.textContent = `Genre: ${genreInput.value}`; 
      articlePreview.appendChild(genreP);

      let storyTextP = document.createElement('p');
          storyTextP.textContent = `${storyTextInput.value}`;
      articlePreview.appendChild(storyTextP);

      let saveBtn = document.createElement('button');
          saveBtn.setAttribute('class', 'save-btn');
          saveBtn.textContent = 'Save Story'

      let editBtn = document.createElement('button');
          editBtn.setAttribute('class', 'edit-btn');
          editBtn.textContent = 'Edit Story';

      let deleteBtn = document.createElement('button');
          deleteBtn.setAttribute('class', 'delete-btn');
          deleteBtn.textContent = 'Delete Story';


      liPreview.appendChild(articlePreview);
      liPreview.appendChild(saveBtn);
      liPreview.appendChild(editBtn);
      liPreview.appendChild(deleteBtn);

      previewList.appendChild(liPreview);

      let firstNameSave = firstNameInput.value;
      let lastNameSave = lastNameInput.value;
      let ageSave = ageInput.value;
      let storyTitleSave  = storyTitleInput.value;
      let genreSave = genreInput.value;
      let storyTextSave = storyTextInput.value;


      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      storyTitleInput.value = '';
      genreInput.value = '';
      storyTextInput.value = '';

      publishBtn.disabled = true;


      editBtn.addEventListener('click', onEdit);
      function onEdit(ev){
        ev.preventDefault();
        
        firstNameInput.value = firstNameSave;
        lastNameInput.value = lastNameSave;
        ageInput.value = ageSave;
        storyTitleInput.value = storyTitleSave;
        genreInput.value = genreSave;
        storyTextInput.value = storyTextSave;

        liPreview.remove();

        deleteBtn.disabled = true;
        editBtn.disabled = true;
        saveBtn.disabled = true;

        publishBtn.disabled = false;
      };


      saveBtn.addEventListener('click', onSave);
      function onSave(ev){
        ev.preventDefault();

        let completeField = document.createElement('h1');
           completeField.textContent = "Your scary story is saved!";

        mainDiv.textContent = '';
        mainDiv.appendChild(completeField);
      };


      deleteBtn.addEventListener('click', onDel);
      function onDel(ev){
        ev.preventDefault();

        publishBtn.disabled = false;

        liPreview.remove();
      };
    };
};
