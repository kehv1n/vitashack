$('.in-drop').on('change',(e)=>{
  let currency = $('.in-drop').val();
  switch (currency) {
    case 'Dollar':
      currency = '$';
    break;
    case 'Euro':
      currency = '€';
      break;
    case 'Yen':
      currency = '¥';
      break;
    default:
      currency = '$';
  }

  $('.simpleCart_total').html(currency + '0.00');
});
