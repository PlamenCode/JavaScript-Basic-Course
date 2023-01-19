function focused() {
    const sections = Array.from(document.querySelectorAll('input'))
            .forEach(element =>{
                element.addEventListener('focus', onFocus)
                element.addEventListener('blur', onBlur)
            })

    function onFocus(ev){
        ev.target.parentElement.classList.add('focused');
    }
    function onBlur(ev){
        ev.target.parentElement.classList.remove('focused')
    }
}