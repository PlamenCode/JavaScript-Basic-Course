function edit(reference, match, replacer){

    let text = reference.textContent;
    let pattern = new RegExp(match, 'g');
    text.replace(pattern, replacer);
    reference.textContent = text;
}