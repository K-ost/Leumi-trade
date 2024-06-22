
// Open modal
const clickFunction = (classname, id) => {
  document.querySelector(classname).addEventListener('click', (e) => {
    document.querySelector(id).classList.add('opened')
  })
}
clickFunction('.show_modal1', '#modal1')
clickFunction('.show_modal1_top', '#modal1')
clickFunction('.show_modal2', '#modal2')
clickFunction('.show_modal3', '#modal3')
clickFunction('.js_autocompleteModal', '#autocompleteModal')

// overlay
const overlays = document.querySelectorAll('.modal-overlay')
overlays.forEach(el => {
  el.addEventListener('click', (e) => {
    e.target.closest('.modal').classList.remove('opened')
  })
})


// opening showinfo
const chartInfo = document.querySelector('.chart_info')
document.querySelector('.js_showinfo').addEventListener('click', e => {
  if (!chartInfo.classList.contains('opepend')) {
    chartInfo.classList.add('opened')
  }
})


// chip deleting
const chipsCloseBtns = document.querySelectorAll('.chip-delete')
chipsCloseBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    e.target.closest('.chip').remove()
  })
})


