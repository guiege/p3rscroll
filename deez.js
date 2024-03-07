const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

const scrollValues = [85, 700, 1480, 2260, 3034, 3807, 4873]

const lag = 50;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 500; 
}

window.addEventListener('scroll', () => {

  var currentPortrait = 0;
  const sticky = document.querySelector('.sticky');

  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;

  var scroll = sticky.offsetTop;
  console.log(scroll);
  const bg = document.querySelector('.horizontal');

  document.getElementById("char0").src="images/char0.webp";
  document.getElementById("char1").src="images/char1off.webp";
  document.getElementById("char2").src="images/char2off.webp";
  document.getElementById("char3").src="images/char3off.webp";
  document.getElementById("char4").src="images/char4off.webp";
  document.getElementById("char5").src="images/char5off.webp";
  
  if(scroll < scrollValues[0])
  {

      bg.classList.remove("anim" + currentPortrait);
      currentPortrait = 0;
      bg.classList.add("animbase");
      document.getElementById("seessvg").classList.add("run");
      document.getElementById("seesdesc").classList.add("run");


    currentPortrait = 0;
  }
  else if(scroll > scrollValues[0] && scroll < scrollValues[1])
  {
    bg.classList.add("anim0");
    bg.classList.remove("anim1");

  }
  else{
    document.getElementById("char0").src="images/char0off.webp";
    for (let i = 0; i < scrollValues.length; i++) {
      if(scroll >= scrollValues[i] & scroll < scrollValues[i + 1]){
        if(currentPortrait != i){
          document.getElementById('char' + i).src='images/char' + i + '.webp';
          bg.classList.remove('anim' + (i - 1));
          bg.classList.remove('anim' + (i + 1));
          bg.classList.add('anim' + i);
        }
        currentPortrait = i;
      }
    }
  }
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});