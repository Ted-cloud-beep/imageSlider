const back=document.querySelector('.back');
const next=document.querySelector('.next');
const photo=document.querySelector('.container');
let count=0;
const photoHandlerBackward=()=>{

  if (count<=0) {
    count=4
  }
  count--;
  photo.style.background=`url('./img/bcg-${count}.jpeg')`;
  console.log(count);

}
const photoHandlerForward=()=>{
  if(count>=4){
    count=0;
  }
  count++;
  photo.style.background=`url('./img/bcg-${count}.jpeg')`;
  console.log(count);

}




back.addEventListener('click',photoHandlerBackward)
next.addEventListener('click',photoHandlerForward)
