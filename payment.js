$('.card_payment').hide()

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const seats = urlParams.get('seats');

$('#seats').val(seats);

$('input[type=radio][name=payment_type]').change(function() {
    if (this.value == 'card') {
        $('.card_payment').show()
    }
    else if (this.value == 'cash') {
        $('.card_payment').hide()
    }
});