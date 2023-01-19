function validate() {
    const input = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    input.addEventListener('change', onChange)

    function onChange(ev){
        let text = ev.target.value;
        if(text.match(pattern)){
            ev.target.removeAttribute('class');
            return;
        }
        ev.target.className = 'error';
    }
}
