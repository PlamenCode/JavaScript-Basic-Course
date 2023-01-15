function everyNthEl(arr,nTh){
    let result = arr.filter((a,index) => index % nTh == 0)
    return result;

}
everyNthEl(['5',
'20',
'31',
'4',
'20'],
2)