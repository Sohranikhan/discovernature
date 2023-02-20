let sidenav = document.querySelector('#sidenav')
let main = document.querySelector('.main')
    let back = document.querySelector('.back')
     let bur = document.querySelector('.bur')
    let cls = document.querySelector('.cls').addEventListener('click', () => {
      sidenav.style.transform = 'translateX(400%)'
      back.style.width = '0%';
      back.style.position = 'absolute'
      doc.style.position = 'relative'
    })
    let doc = document.querySelector('.main')
    let burger = document.querySelector('.burger').addEventListener('click', () => {
      sidenav.style.transform = 'translateX(0%)'
      back.style.width = '100%';
      back.style.position = 'fixed'
      doc.style.position = 'fixed'
    })
    
    let username = document.querySelector('#name')
  let form = document.querySelector('form')
  let error = document.querySelector('.error')
  let submit = document.querySelector('.sub')
  let pass = document.querySelector('#pass')
 
 username.addEventListener('keyup',()=>{
if (username.value === '' || username.value.length < 3 ) {
     error.innerHTML = 'name shoud had 3 characters';
     submit.setAttribute('type','hidden')
   }
   else{
     error.innerHTML='Fill Form'
     
   }
 })
  
  pass.addEventListener('keyup', () => {
    if (pass.value === '' || pass.value.length < 7) {
      error.innerHTML = 'Password shoud had minimum 7 characters';
      submit.setAttribute('type','hidden')
      
    }
    else {
      form.setAttribute('action','#')
      error.innerHTML = 'Fill Form'
      submit.setAttribute('type','submit')
     
      
    }
  })

  let image= document.querySelectorAll(".image")
  image.forEach((img)=>{
    img.addEventListener("mouseover", ()=>{
img.style.transform="translateY(100%)"
// setTimeout(()=>{
//     img.style.transform="translateX(0%)"
// },3000)

})
      })
      image.forEach((img)=>{
        img.addEventListener("mouseout", ()=>{
            img.style.transform="translateY(0%)"
        })
      })