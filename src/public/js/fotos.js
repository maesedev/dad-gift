const img1 =  document.querySelector('.img1');
const img2 =  document.querySelector('.img2');


const img1Childs = img1.querySelectorAll('img')
const img2Childs = img2.querySelectorAll('img')

let width1 = 21,width2 = 21;

for(i = 0; i < 2; i++ ){
    width1 += img1Childs[i].width
    width2 += img2Childs[i].width
}

img1.style.width = width1 + "px"
img2.style.width = width2 + "px"