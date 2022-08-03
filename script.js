//Get the button:
btn = document.getElementById("to-top-btn");
ul = document.getElementById("ul-drop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topo() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

function menuDrop() {
    if(ul.classList.contains("drop-ativo")) {
        ul.classList.remove("drop-ativo")
        ul.classList.add("drop-desativo");
        ul.style.opacity = 0;
    } else {
        ul.classList.remove("drop-desativo")
        ul.classList.add("drop-ativo")
        ul.style.opacity = 1;
    }
}

$(document).ready(function() {
  $("#contact-form").on('submit', function(e){
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/gabekw@hotmail.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            mensagem: $('#mensagem').val(),
            _subject: 'Nova mensagem - Site Gabekw',
            _template: 'box'
        },
        beforeSend: function(){
            $('#loading-form').show()
            $('.btn-form').attr('disabled', 'disabled')
        },
        complete: function(){
            $('#loading-form').hide()
            $('.btn-form').removeAttr('disabled')
        },
        success: function(result) {
            $('.success').removeClass('hide')
            $('.success').addClass('show')
            $('#nome').val('')
            $('#email').val('')
            $('#assunto').val('')
            $('#mensagem').val('')
        },
        error: function(result) {
            $('.error').removeClass('hide')
            $('.error').addClass('show')
        }
    });
})
});