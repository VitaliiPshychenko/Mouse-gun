document.addEventListener('click', event => {
  document.elementFromPoint(event.clientX, event.clientY).remove();
}) 
