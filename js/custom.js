(function ($) {
  $(document).ready(function() {

    function setEnValues() {
      $('.map-msk #map-box img').attr('src', '/img/msk-en.svg');
      $('.map-msk .map-title').text('Moscow Metro');
      $('.map-spb #map-box img').attr('src', '/img/spb-en.svg');
      $('.map-spb .map-title').text('Saint Petersburg Metro');
      $('.menu-item-spb').text('Saint Petersburg');
      $('.menu-item-msk').text('Moscow');
      $('.menu-item-download').text('Download PDF');
      $('.map-msk .menu-item-download').attr('href', '/downloads/msk-en.pdf');
      $('.map-spb .menu-item-download').attr('href', '/downloads/spb-en.pdf');
      $('.d-logo').attr('href', 'https://4d-design.pro/');
      $('.menu-item-metro2').text('Metro on the Map');
      $('body').removeClass('lang-ru');
      $('body').addClass('lang-en');
      if ($('body').hasClass('map-msk')) {
        $(document).prop('title', 'Moscow Metro Map');
      } else {
        $(document).prop('title', 'Saint Petersburg Metro Map');
      }
    }

    function setRuValues() {
      $('.map-msk #map-box img').attr('src', '/img/msk-ru.svg');
      $('.map-msk .map-title').text('Московский метрополитен');
      $('.map-spb #map-box img').attr('src', '/img/spb-ru.svg');
      $('.map-spb .map-title').text('Петербургский метрополитен');
      $('.menu-item-spb').text('Санкт-Петербург');
      $('.menu-item-msk').text('Москва');
      $('.menu-item-download').text('Скачать PDF');
      $('.map-msk .menu-item-download').attr('href', '/downloads/msk-ru.pdf');
      $('.map-spb .menu-item-download').attr('href', '/downloads/spb-ru.pdf');
      $('.d-logo').attr('href', 'https://4d-design.pro/ru');
      $('.menu-item-metro2').text('Метро на карте');
      $('body').removeClass('lang-en');
      $('body').addClass('lang-ru');
      if ($('body').hasClass('map-msk')) {
        $(document).prop('title', 'Схема метро Москвы');
      } else {
        $(document).prop('title', 'Схема метро Санкт-Петербурга');
      }
    }

    if (localStorage.getItem('lang') != 'en') {
      localStorage.setItem('lang', 'ru');
    }

    if (localStorage.getItem('lang') == 'en') {
      setEnValues();
    };

    $('body').addClass('page-loaded');

    // dropdown menus
    $('.menu-dropdown-toggle').click(function (e) {
      $(this).removeClass('tooltip-expanded');
      $(this).find('.tooltip').removeClass('tooltip-expanded');
      var target = '#'.concat($(this).attr('data-target'));
      $(target).slideToggle('fast');
      $('.menu-dropdown:not(' + target + ')').slideUp('fast');
      e.stopPropagation();
      e.preventDefault();
    });

    $(document).click(function () {
      $('.menu-dropdown').slideUp('fast');
    });

    $('.switch-en').click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      setEnValues();
      localStorage.setItem('lang', 'en');
      $('.menu-dropdown').slideUp('fast');
    });

    $('.switch-ru').click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      setRuValues();
      localStorage.setItem('lang', 'ru');
      $('.menu-dropdown').slideUp('fast');
    });

  }); 
})(jQuery);
