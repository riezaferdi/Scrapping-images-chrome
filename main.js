imgs=document.querySelectorAll('.result-card_image--art') 
let txt = []; 
for (var i = 0; i<imgs.length; i++){txt.push(imgs[i].src.replace('assets'))} 
txt.toString().replace(/,/g, '\n')
