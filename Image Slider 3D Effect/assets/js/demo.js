/**
 * demo.js
 * https://coidea.website
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2019, COIDEA
 * https://coidea.website
 */

  // images loaded
  $('.coidea-3d-carousel').imagesLoaded({
    background: true
  }, function() {

    // hide loader
    $('.loader').addClass('is-loaded');


    // variables
    var timeline = new TimelineMax(),
      carousel = $(".coidea-3d-carousel"),
      boxes = $(".item"),
      stage = $(".stage"),
      $nav = $("#nav"),
      angle = 360 / 3;

    // set stage
    TweenMax.set(stage, {
      css: {
        perspective: "86vw",
        transformStyle: "preserve-3d"
      }
    });
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      TweenMax.set(stage, {
        css: {
          perspective: "8000px",
          transformStyle: "preserve-3d"
        }
      });        
    }

    // set data rotation for each item
    boxes.each(function(index, element) {
      TweenMax.set(element, {
        css: {
          rotationY: index * angle
        }
      });
      element.dataset.rotationY = index * angle;
    });

    // click on next item
    $nav.on("click", "#next", function() {

      timeline
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 - angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
    });


    // click on prev item
    $nav.on("click", "#prev", function() {

      timeline
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 + angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5');
    });

  });
