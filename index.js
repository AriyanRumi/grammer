


    let ab =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']



  // Math objects

  // 1. Math.PI
  // 2. Math.round()
  // 3. Math.pow()
  // 4. Math.sqrt()
  // 5. Math.abs() return absolute value remove - value 
  // 6. Math.ceil() return 2.1 then output 3
  // 7. Math.floor()
  // 8. Math.trunc()
  // 9. Math.random()
  // 10. Math.min(2,20,50,70)
  // 11. Math.max(50,400,800)


  const btn =document.querySelector('.cbtn')
  const text =document.querySelector('#text')
  const total =document.querySelector('.total')
  const remain =document.querySelector('.remain')
  const alert =document.querySelector('.copyAlert')


  // start placeholder text effect
  let textPlaceholder ="Please Write Here..."
  let i =0
  let speed =100
  const typeWriter =()=>{
    if(i <textPlaceholder.length){
      text.placeholder += textPlaceholder.charAt(i)
      i++
      setTimeout(typeWriter,speed)
    }
  }
// end placeholder text effect



//  start textArea section
  const textFunction=()=>{
    let tvalue =text.value
    let newValue =tvalue.slice(0,100)
    total.innerHTML=newValue.length
    remain.innerHTML =100 - newValue.length

    if(tvalue.length > 0){
      btn.classList.add('btnActive')
    }else{
      btn.classList.remove('btnActive')
    }
  }
// end textArea section


// copy to clipboard function

const autoHide =()=>{
  setInterval( ()=>{
    alert.classList.remove('alertActive')
  },3000)
}

const copyfun=()=>{
 let textValue =text.value
 navigator.clipboard.writeText(textValue)
 alert.classList.add('alertActive')
 autoHide();
 let clickSound =new Audio('click.wav')
 clickSound.play();
}
  text.addEventListener('keyup',textFunction)
  btn.addEventListener('click',copyfun)
// end copy to clipboard function


