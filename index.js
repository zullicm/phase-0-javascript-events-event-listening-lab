const main = document.getElementById('input');

function addingEventListener(){
  main.addEventListener('click', function() {
    alert('I was clicked!');
    return "clicked"
  })
}
