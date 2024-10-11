// -------------------------------------------------------------Nav bar js Starts Here  ---------------------------------------------------

//for showing the side bar

function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = 'flex'
}

//for hiding the side bar

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = 'none'
}

// -------------------------------------------------------------Nav bar js Endss Here  ---------------------------------------------------



// -----------------------------------------------------------Form Js Starts here-------------------------------------------------------

// Get elements for the first popup
const openPopup1Btn = document.getElementById('openPopup1');
const popupForm1 = document.getElementById('popupForm1');

// Get elements for the second popup
const openPopup2Btn = document.getElementById('openPopup2');
const popupForm2 = document.getElementById('popupForm2');


// Open the first popup
openPopup1Btn.addEventListener('click', () => {
  popupForm1.style.display = 'flex';
});

// Open the second popup
openPopup2Btn.addEventListener('click', () => {
  popupForm2.style.display = 'flex';
});


// Close the popup when clicking on the 'x'
document.querySelectorAll('.close').forEach((closeBtn) => {
  closeBtn.addEventListener('click', (event) => {
    const popupId = event.target.getAttribute('data-close');
    document.getElementById(popupId).style.display = 'none';
  });
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
  }
});




// --------------------------------------------------------------------Form Js Ends here---------------------------------------------------------------------------------


