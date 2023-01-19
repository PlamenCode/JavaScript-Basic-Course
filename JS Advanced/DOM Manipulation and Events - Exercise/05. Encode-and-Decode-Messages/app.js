function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');

    const encodeButton = buttons[0];
    const decodeButton = buttons[1];
    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    let encodedText = '';

    function encode(ev){
        let text = document.getElementsByTagName('textArea')[0].value;
        document.getElementsByTagName('textArea')[1].value = encodedText;
        
        for(let i = 0; i < text.length; i++){
            let elementInAscii = text.charCodeAt(i) + 1;
            let elementFromAscii = String.fromCharCode(elementInAscii);
            encodedText += elementFromAscii;
        }
        document.getElementsByTagName('textArea')[0].value = '';
        document.getElementsByTagName('textArea')[1].value = encodedText;
        encodedText = '';
    }

    function decode(ev){
        let text = document.getElementsByTagName('textArea')[1].value;
        document.getElementsByTagName('textArea')[1].value = '';
        let newContent = '';

        for(let i = 0; i < text.length; i++){
            let elementInAscii = text.charCodeAt(i) - 1;
            let elementFromAscii = String.fromCharCode(elementInAscii);
            newContent += elementFromAscii;
        }
        document.getElementsByTagName('textArea')[1].value = newContent;
    }
}