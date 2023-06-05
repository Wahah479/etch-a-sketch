const GRID = 16;
const canvas = document.querySelector('#canvas');

/** 
for (let i = 0; i < GRID**2; i++) {
    const pixel = document.createElement('div');
    pixel.style.boxSizing = 'border-box';
    pixel.style.height = (300)/GRID + 'px';
    pixel.style.width = (300)/GRID +'px';
    pixel.style.border = '1px gray solid';
    //pixel.style.margin = '1px';
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);

}

*/

function deletePixels(){
    const elements = document.getElementsByClassName('pixel');
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function colorPixel(e) {
    e.target.classList.add('active');
    console.log(e);
}

function updateCanvas(size){
    deletePixels();
    for (let i = 0; i < size**2; i++) {
        const pixel = document.createElement('div');
        pixel.style.boxSizing = 'border-box';
        pixel.style.height = (400)/size + 'px';
        pixel.style.width = (400)/size +'px';
        pixel.style.border = '1px gray solid';
        //pixel.style.margin = '1px';
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    
    }
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colorPixel));
}



function changeSize(){
    let size = prompt("Please enter the size you want for the grid. (Max is 100)");
    updateCanvas(size);
}


updateCanvas(GRID);
//const pixels = document.querySelectorAll('.pixel');
//pixels.forEach(pixel => pixel.addEventListener('mouseover', colorPixel));
