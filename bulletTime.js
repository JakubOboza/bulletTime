/*
  Name: bulletTime
  Description: bulletTime is a small lib for lazy loading images designed to
  load big images / low priority after user see and can interact with web page

  Usage:
    $(".lazy-load").bulletTime({});
  will lazy load images from each element with class .lazy-load
  example element should look like this
  <div data-src="/images/lulz.jpg" data-alt="lulz sec" class="load-lazy"></div>
  the element will be replaced with <img> tag after image loading is finished.

  You can customize src in the element and alt, for default i used html5 ready "data-" attributes
    $(".lazy-load").bulletTime({
      src: 'alt'
    });
   will make it pull src of the image from alt attribute ;)

  Author: Jakub Oboza
  Email: jakub.oboza@gmail.com
*/

(function( $ ){
    $.fn.bulletTime = function(options) {

      /* bulletTime defaults */
      var defaults = {
        src: 'data-src',
        alt: 'data-alt',
        img_class: 'data-class'
      };

      var opts = $.extend(defaults, options);

      this.each(function(i, el){

        var element = $(el);

        var imgSrc     = element.attr(opts.src);
        var imgAlt     = element.attr(opts.alt);
        var imgClass   = element.attr(opts.img_class);
        var imgElement = $('<img />');

        /* create img element */

        var image = new Image();
        image.onload = function() {
          imgElement.attr('src', imgSrc);
          imgElement.attr('alt', imgAlt);
          imgElement.attr('class', imgClass);
          element.replaceWith(imgElement);
        };
        /* pull the image path and set it here for the image */
        image.src = imgSrc;
      });

    };
})( jQuery );