imgs=document.querySelectorAll('.result-card_image--art') 
let txt = []; 
for (var i = 0; i<imgs.length; i++){txt.push(imgs[i].src.replace('mobile-large', 'original'))} 
txt.toString().replace(/,/g, '\n')
