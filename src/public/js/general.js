// setTimeout(console.clear,1000)


//reload without console
// setTimeout(()=>{open('http://localhost:3000');close()},3000)


//centrar todos las sec-n
let sectionsContainers = document.querySelectorAll('.sec-container')
let floatingAll = document.querySelectorAll('.floating')

floatingAll.forEach((item,i = 0)=>{
    item.classList.add('float' +  i)
    i++
})



// anime({
//     targets:'#papa-lines',
//     d:[
//         {value:'M15 122C92.8333 46.5 316.6 -63.1 589 102.5C861.4 268.1 1200.17 151.167 1335.5 72C1389 28.5 1524.3 -26.3 1637.5 102.5C1750.7 231.3 2003.67 135.833 2116 72'},
//         {value:'M2117 80.4593C2039.17 155.959 1815.4 265.559 1543 99.9592C1270.6 -65.6408 931.833 51.2925 796.5 130.459C743 173.959 607.7 228.759 494.5 99.9592C381.3 -28.8409 128.333 66.6258 16 130.459'}        
//     ], 
//     easing:'easeOutQuad',
//     duration:3000,
//     loop:true,
// }) 