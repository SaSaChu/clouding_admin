
$(function() {

  // icon的提示效果
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $('.table-striped').each (function () {
    var $that = $(this);
    
    $that.find ('.tablecheck').click (function () {
      $that.find ('.tablehover').removeClass ('tShow')
      $(this).toggleClass ('tShow');
    });
  });

  
  // $('.tablecheck').click(function(){
  //   $('.tablehover').toggleClass('tShow');
  // })

  $('.cd-accordion-menu').each(function() {
    let $that = $(this)
    $that.find('> label').click(function() {
      $(this).toggleClass('active')
        .closest('.col')
        .siblings()
        .find('.cd-accordion-menu > label')
        .removeClass('active')
    })
    $that.find('> div label').click(function() {
      let $this = $(this)
      if ($this.hasClass('active'))
        return $this.removeClass('active')
      else
        $this.addClass('active')
          .siblings()
          .removeClass('active')
    })
  })

  // checkboxs 選擇
  $('input[type="checkbox"][tag]').click(function() {
    $('input[type="checkbox"][parent~=' + $(this).attr('tag') + ']').prop('checked', $(this).is(':checked'))
  })

  // 表單出現提示泡泡
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

});

