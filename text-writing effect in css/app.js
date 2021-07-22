const text=[ 'STUDENT.','PROGRAMMER.','WEB DEVELOPER.'];
let count=0;
let index=0;
let textContent='';
let letter='';
(function type(){
    if(count==text.length){
        count=0;        
}
textContent=text[count];
letter = textContent.slice(0, ++index);
document.querySelector(".typing").textContent = letter;
if(letter.length===textContent.length)
{
    count++;
    index=0;
}
setTimeout(type ,300);
})();