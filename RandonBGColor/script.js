const button=document.querySelector('.color_changer')
const body=document.querySelector("body")

button.addEventListener('click', () => {
    let randColor=randRGB();
    body.style.backgroundColor=randColor
});

function randRGB()
{
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`;
}