function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', show));

    function show(ev){
        const button = ev.target;
        const profile = button.parentNode;
        const moreInfo = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if(lockStatus == 'unlock'){
            if(button.textContent == 'Show more'){
                moreInfo.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if(lockStatus == 'lock'){
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}