//действие для открытии popup окна
const button = document.getElementById('button');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});


var popup = document.querySelector('.popup');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.popup') === null){
        popup.style.display = 'none';
    }
});


//Действие при нажатии на крестик
$('.js-close-popup').click(function () {
  $('.overlay_popup, .popup').hide();
});

//Закрыть окно при нажатии на Escape
$(document).on('keyup', function(e) {
  if ( e.key == "Escape" ) {
    $( ".popup" ).hide();
  }
});
