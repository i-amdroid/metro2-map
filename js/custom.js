(function ($) {
  $(document).ready(function() {

    function setEnglishValues() {
      var data = {};

      $('.map-msk #map-box img').attr('src', '/img/msk-en.svg');
      $('.map-msk .map-title').text('Moscow Metro');
      $('.menu-item-msk').text('Moscow');
      $('.map-msk .menu-item-download').attr('href', '/downloads/msk-en.pdf');
      data['map-msk'] = {};
      data['map-msk']['native-lang'] = 'lang-ru';
      data['map-msk']['title-en'] = 'Moscow Metro Map';

      $('.map-spb #map-box img').attr('src', '/img/spb-en.svg');
      $('.map-spb .map-title').text('Saint Petersburg Metro');
      $('.menu-item-spb').text('Saint Petersburg');
      $('.map-spb .menu-item-download').attr('href', '/downloads/spb-en.pdf');
      data['map-spb'] = {};
      data['map-spb']['native-lang'] = 'lang-ru';
      data['map-spb']['title-en'] = 'Saint Petersburg Metro Map';

      $('.map-mnk #map-box img').attr('src', '/img/mnk-en.svg');
      $('.map-mnk .map-title').text('Minsk Metro');
      $('.menu-item-mnk').text('Minsk');
      $('.map-mnk .menu-item-download').attr('href', '/downloads/mnk-en.pdf');
      data['map-mnk'] = {};
      data['map-mnk']['native-lang'] = 'lang-by';
      data['map-mnk']['title-en'] = 'Minsk Metro Map';

      $('.map-cph #map-box img').attr('src', '/img/cph-en.svg');
      $('.map-cph .map-title').text('Copenhagen Metro and S-train');
      $('.menu-item-cph').text('Copenhagen');
      $('.map-cph .menu-item-download').attr('href', '/downloads/cph-en.pdf');
      data['map-cph'] = {};
      data['map-cph']['native-lang'] = 'lang-da';
      data['map-cph']['title-en'] = 'Copenhagen Metro and S-train Map';
      
      $('.menu-item-download').text('Download PDF');
      $('.d-logo').attr('href', 'https://4d-design.pro/');
      $('.menu-item-metro2').text('Metro on the Map');
      $('body').addClass('lang-en');

      var map = '';
      var bodyClassList = $('body').attr('class').split(/\s+/);
      $.each(bodyClassList, function(index, item) {
        if (item.match("^map-")) {
          map = item;
        }
      });

      $('body').removeClass(data[map]['native-lang']);
      $(document).prop('title', data[map]['title-en']);

    }

    function setNativeValues() {
      var data = {};

      $('.map-msk #map-box img').attr('src', '/img/msk-ru.svg');
      $('.map-msk .map-title').text('Московский метрополитен');
      $('.menu-item-msk').text('Москва');
      $('.map-msk .menu-item-download').attr('href', '/downloads/msk-ru.pdf');
      data['map-msk'] = {};
      data['map-msk']['native-lang'] = 'lang-ru';
      data['map-msk']['title-na'] = 'Схема метро Москвы';

      $('.map-spb #map-box img').attr('src', '/img/spb-ru.svg');
      $('.map-spb .map-title').text('Петербургский метрополитен');
      $('.menu-item-spb').text('Санкт-Петербург');
      $('.map-spb .menu-item-download').attr('href', '/downloads/spb-ru.pdf');
      data['map-spb'] = {};
      data['map-spb']['native-lang'] = 'lang-ru';
      data['map-spb']['title-na'] = 'Схема метро Санкт-Петербурга';

      $('.map-mnk #map-box img').attr('src', '/img/mnk-by.svg');
      $('.map-mnk .map-title').text('Мінскі метрапалітэн');
      $('.menu-item-mnk').text('Мінск');
      $('.map-mnk .menu-item-download').attr('href', '/downloads/mnk-by.pdf');
      data['map-mnk'] = {};
      data['map-mnk']['native-lang'] = 'lang-by';
      data['map-mnk']['title-na'] = 'Схема метро Мінска';

      $('.map-cph #map-box img').attr('src', '/img/cph-da.svg');
      $('.map-cph .map-title').text('Københavns Metro og S-tog');
      $('.menu-item-cph').text('København');
      $('.map-cph .menu-item-download').attr('href', '/downloads/cph-da.pdf');
      data['map-cph'] = {};
      data['map-cph']['native-lang'] = 'lang-da';
      data['map-cph']['title-na'] = 'Kort over Københavns Metro og S-tog';
      
      $('.menu-item-metro2').text('Метро на карте');
      $('body').removeClass('lang-en');

      var map = '';
      var bodyClassList = $('body').attr('class').split(/\s+/);
      $.each(bodyClassList, function(index, item) {
        if (item.match("^map-")) {
          map = item;
        }
      });

      $('body').addClass(data[map]['native-lang']);
      $(document).prop('title', data[map]['title-na']);

      switch(data[map]['native-lang']) {
        case 'lang-ru':
          $('.menu-item-download').text('Скачать PDF');
          $('.d-logo').attr('href', 'https://4d-design.pro/ru');
          break;
        case 'lang-by':
          $('.menu-item-download').text('Спампаваць PDF');
          $('.d-logo').attr('href', 'https://4d-design.pro/');
          break;
        case 'lang-da':
          $('.menu-item-download').text('Download PDF');
          $('.d-logo').attr('href', 'https://4d-design.pro/');
          break;  
      }

    }

    if (localStorage.getItem('lang') != 'en') {
      localStorage.setItem('lang', 'na');
    }

    if (localStorage.getItem('lang') == 'en') {
      setEnglishValues();
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
      setEnglishValues();
      localStorage.setItem('lang', 'en');
      $('.menu-dropdown').slideUp('fast');
    });

    $('.switch-na').click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      setNativeValues();
      localStorage.setItem('lang', 'na');
      $('.menu-dropdown').slideUp('fast');
    });

  }); 
})(jQuery);
