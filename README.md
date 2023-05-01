# Scrapping-images-chrome 
# (Source :https://www.youtube.com/watch?v=5eXRxG-3rWM)

1. Load search results page
2. Open console
3. Run:

    imgs=document.querySelectorAll('.result-card_image--art')
    let txt = [];
    for (var i = 0; i<imgs.length; i++){txt.push(imgs[i].src.replace('mobile-large', 'original'))}
    txt.toString().replace(/,/g, '\n')
    
4. Save output to a .txt 
5. wget -i (filename}.txt
