function fancyBarcode(input){
    let n = Number(input.shift());
    let pattern = /@#{1,}(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/g

   
    for (let i = 0; i < n; i++) {
        let currentCode = input[i];

        if(!currentCode.match(pattern)){
            console.log('Invalid barcode');
        } else {
            let productGroup = '';
            let nums = '';

            let codeReg = currentCode.match(pattern);
            let codeName = codeReg.join('')

            while(codeName.includes('#')){
                codeName = codeName.replace('#', '');
            }
            while(codeName.includes('@')){
                codeName = codeName.replace('@', '');
            }
            
            let codeNameArr = codeName.split('');
            for (let char of codeNameArr) {
                let charNum = char.charCodeAt();
                if (charNum >= 48 && charNum <= 57) {
                    nums += char;
                } 
            }

            if (nums.length == 0) {
                productGroup = '00';
            } else {
                productGroup = nums;
            }
            
            console.log(`Product group: ${productGroup}`);
        }
        
    }
    
} 
fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#Val234iditeM@#"])

