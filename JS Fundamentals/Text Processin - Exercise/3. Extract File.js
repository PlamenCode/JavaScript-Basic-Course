function extractFile(adress){
    let addressAray = adress.split('\\');
    let file = addressAray.pop();
    
    let lastIndex = file.lastIndexOf('.');
    let fileName = file.slice(0,lastIndex);
    let fileType = file.slice(lastIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')