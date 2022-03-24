const getEl = (selector) => document.querySelectorAll(selector)


const button = getEl('.Button__Captcha')[0]
const image = getEl('.Image')[0]
const error = getEl('.Error__Label--Container')[0]
const input = getEl('.Input__Captcha')[0]

button.addEventListener('click', (e)=>{
  e.preventDefault()
  const num = Math.floor(Math.random() * 4)+1;
  if(input.value === 'VGJHM'){

    image.src = `./assets/chigui${num}.jpeg`
    error.style.display = 'none'
  }else{
    error.style.display = 'block'

  }
})