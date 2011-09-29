# bulletTime.js
bulletTime is a small lib for lazy loading images designed to
load big images / low priority after user see and can interact with web page
                                                                                                                                                                                                                          #Usage:
`$(".lazy-load").bulletTime({});`
will lazy load images from each element with class .lazy-load
example element should look like this
`<div data-src="/images/lulz.jpg" data-alt="lulz sec" class="load-lazy"></div>`
the element will be replaced with <img> tag after image loading is finished.
You can customize src in the element and alt, for default i used html5 ready "data-" attributes                                                                                                                        d
    $(".lazy-load").bulletTime({
      src: 'alt'
    });
will make it pull src of the image from alt attribute ;)

# Author:
  Jakub Oboza
  Email: jakub.oboza@gmail.com