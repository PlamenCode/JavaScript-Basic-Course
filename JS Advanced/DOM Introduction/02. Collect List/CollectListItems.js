function extractText() {
    const items = Array.from(document.getElementsByTagName('li'));
    const result = items.map(e => e.textContent).join('\n');
    document.getElementById('result').value = result;
}