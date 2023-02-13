window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');

  let reviewList = document.getElementById('review-list');
  let publishList = document.getElementById('published-list');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', onPublish);

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', onClear);

  function onPublish(ev){
    ev.preventDefault();

    if(titleInput.value == '' || categoryInput.value == '' || contentInput.value == ''){
      return;
    }

    let liEl = document.createElement('li');
    liEl.setAttribute('class', 'rpost');

    let articleEl = document.createElement('article');

    let h4El = document.createElement('h4');
    h4El.textContent = `${titleInput.value}`;

    let categoryEl = document.createElement('p');
    categoryEl.textContent = `Category: ${categoryInput.value}`;

    let contentEl = document.createElement('p');
    contentEl.textContent = `Content: ${contentInput.value}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(categoryEl);
    articleEl.appendChild(contentEl);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', onEdit);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', onApprove)

    liEl.appendChild(articleEl);
    liEl.appendChild(editBtn);
    liEl.appendChild(approveBtn);

    reviewList.appendChild(liEl);

    let saveTitle = titleInput.value;
    let saveCategory = categoryInput.value;
    let saveContent = contentInput.value;

    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';


    function onEdit(ev){
      ev.preventDefault();
  
      titleInput.value = saveTitle;
      categoryInput.value = saveCategory;
      contentInput.value = saveContent;
  
      let target = ev.target;
      target.parentElement.remove();
    };


    function onApprove(ev){
      ev.preventDefault();

      let target = ev.target;
      target.parentElement.parentElement.remove();

      editBtn.remove()
      approveBtn.remove()
      publishList.appendChild(liEl);
    
    }
  }
  function onClear(ev){
    ev.preventDefault()
    
    publishList.innerHTML = '';
  }

}
