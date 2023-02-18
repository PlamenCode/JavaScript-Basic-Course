window.addEventListener("load", solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let title = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let story = document.getElementById('story');

    let preview = document.getElementById('preview-list');
    let mainDin = document.getElementById('main');

    let publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', onPublish);


    function onPublish(ev){
        ev.preventDefault();
        console.log('hello');

        if(firstName.value == '' 
        || lastName.value == '' 
        || age.value == ''
        || title.value == ''
        || genre.value == ''
        || story.value == ''){
            return;
        }

        let li = document.createElement('li');
            li.classList.add('story-info');

        let article = document.createElement('article');
        
        let nameH4 = document.createElement('h4');
            nameH4.textContent = `Name: ${firstName.value} ${lastName.value}`;

        let ageP = document.createElement('p');
            ageP.textContent = `Age: ${age.value}`;

        let titleP = document.createElement('p');
            titleP.textContent = `Title: ${title.value}`;

        let genreP = document.createElement('p');
            genreP.textContent = `Genre: ${genre.value}`;

        let contentP = document.createElement('p');
            contentP.textContent = story.value;

        article.appendChild(nameH4);
        article.appendChild(ageP);
        article.appendChild(titleP);
        article.appendChild(genreP);
        article.appendChild(contentP);

        let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = `Save Story`;
            saveBtn.addEventListener('click', onSave);

        let editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = `Edit Story`;
            editBtn.addEventListener('click', onEdit);

        let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = `Delete Story`;
            deleteBtn.addEventListener('click', onDelete);

        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        preview.appendChild(li);

        let saveFirstName = firstName.value;
        let saveLastName = lastName.value;
        let saveAge = age.value;
        let saveTitle = title.value;
        let saveGenre = genre.value;
        let saveStory = story.value;

        firstName.value = '';
        lastName.value = '';
        age.value = '';
        title.value = '';
        genre.value = '';
        story.value = '';

        publishBtn.disabled = true;

        function onEdit(ev){
            ev.preventDefault();

            ev.target.parentElement.remove();
            publishBtn.disabled = false;

            firstName.value = saveFirstName;
            lastName.value = saveLastName;
            age.value = saveAge;
            title.value = saveTitle;
            genre.value = saveGenre;
            story.value = saveStory;
        };

        function onSave(ev){
            ev.preventDefault();

            mainDin.innerHTML = '';

            let h1Tag = document.createElement('h1');
               h1Tag.textContent = `Your scary story is saved!`;

            mainDin.appendChild(h1Tag);
        };

        function onDelete(ev){
            ev.preventDefault();
            
            ev.target.parentElement.remove();

            publishBtn.disabled = false
        }
    }
}
