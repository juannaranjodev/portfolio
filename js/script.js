// Select all modal popups
var modalList = document.querySelectorAll('.modal');

// Select all project buttons
var btnList = document.querySelectorAll('.project__btn');

// Get the <span> element that closes the modal
var modalCloseList = document.querySelectorAll(".modal__close");

// Iterator
var index;

// Set event listeners for all project buttons
for (var i = 0; i < btnList.length; i++) {
  index = i;
  btnList[i].addEventListener('click', showModal(index));
}

// Set event listeners for all close icons in modals
for (var i = 0; i < btnList.length; i++) {
  index = i;
  modalCloseList[index].addEventListener('click', hideModal(index));
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (var i = 0; i < modalList.length; i++) {
    index = i;
    if (event.target == modalList[index]) {
        hideModal(index)();
    }
  }
}

// Open the modal
function showModal(currentIndex) {
  return function() {
    modalList[currentIndex].style.display = 'block';
  };
}

// Close the modal
function hideModal(currentIndex) {
  return function() {
    modalList[currentIndex].style.display = 'none';
  };
}
