
// Open modal
const clickFunction = (classname, id) => {
  const btns = document.querySelectorAll(classname)
  btns.forEach(el => {
    el.addEventListener('click', () => {
      document.querySelector(id).classList.add('opened')
    })
  })
}
clickFunction('.show_modal1', '#modal1')
clickFunction('.show_modal2', '#modal2')
clickFunction('.show_modal3', '#modal3')

// overlay
const overlays = document.querySelectorAll('.modal-overlay')
overlays.forEach(el => {
  el.addEventListener('click', (e) => {
    e.target.closest('.modal').classList.remove('opened')
  })
})