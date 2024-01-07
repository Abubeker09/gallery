let bigImg = document.getElementById('big-img');
let imm = document.getElementById('im');

function show(im){
  bigImg.style.display = 'flex';
  imm.src = im
}

function clo(){
  bigImg.style.display = 'none';
}