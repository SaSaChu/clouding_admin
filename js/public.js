
$(function() {
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
});
