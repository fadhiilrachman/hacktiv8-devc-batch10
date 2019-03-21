$("form#contact").submit(function(e){
    emailAddr = $('input[name="email"]').val();
    if(emailAddr=='') {
        $('#modalEmptyEmail').modal('show');
        e.preventDefault();
    }
    msg = $('textarea[name="message"]').val();
    if(msg=='') {
        $('#modalEmptyMsg').modal('show');
        e.preventDefault();
    }
});