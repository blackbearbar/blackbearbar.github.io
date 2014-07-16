var Splash = function() {
  var priv = {}, self = this, $container, $target;

  priv.initialize = function() {
    var position = 2000, $frame, $window;

    $container = $('<div></div>');
    $frame = $('<iframe></iframe>');
    $target = $('<div></div>');
    $window = $(window);

    $frame.attr('src', 'https://blackbearbar.github.io')
          .css('border', 'none')
          .css('height', $window.height());

    $container.css('width', $window.width())
              .css('top', '0px')
              .css('left', '0px')
              .css('position', 'fixed')
              .css('background-color', 'black')
              .css('height', $window.height())
              .css('z-index', position);

    $target.css('width', $window.width())
           .css('top', '0px')
           .css('left', '0px')
           .css('position', 'fixed')
           .css('height', $window.height())
           .css('z-index', position+1)
           .click(self.remove);

    $container.append($frame);

    $('body').prepend($container)
             .prepend($target);

  };

  self.remove = function() {
    $container.remove();
    $target.remove();
  };

  priv.initialize();
};

$(function() {window.splash = new Splash();});
