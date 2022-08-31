const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

button.addEventListener("click", function(evt) {
  console.log('button')
  const li = document.createElement('li')
  console.log(input)
  li.textContent = input.value
  console.log(li);
  input.value = ' '
  uList.appendChild(li)
})
