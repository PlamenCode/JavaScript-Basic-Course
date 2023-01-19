function solve(){
    let buttons = document.getElementsByClassName('button');
    let textArea = document.getElementsByTagName('textArea');

    let list = {};

    Array.from(buttons).forEach(b => {
        b.addEventListener('click', onClick)})

    function onClick(ev){

        if(ev.target.className === 'product-add'){
            let currentEl = ev.target.parentElement;
            let price = Number(currentEl.nextElementSibling.innerHtml);
            let name = currentEl.previousElementSibling.children[0].innerHtml;

            if(!list[name]){
                list[name] = 0;
            }
            list[name] += price;

            textArea.innerHtml += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        } else{

            let totalPrice = Number(Object.values(list).reduce((a,b) => a+b));
            textArea.innerHtml += `You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`

            Array.from(buttons).forEach(b => b.disabled = true)
        }
    }
}