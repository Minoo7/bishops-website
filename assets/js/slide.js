slideshow = function() {

    var slideshow_options = {
      $AutoPlay: 1,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var slideshow_slider = new $JssorSlider$("slideshow", slideshow_options);

    //make sure to clear margin of the slider container element
    slideshow_slider.$Elmt.style.margin = "";

    /*#region responsive code begin*/

    /*
        parameters to scale jssor slider to fill parent container

        MAX_WIDTH
            prevent slider from scaling too wide
        MAX_HEIGHT
            prevent slider from scaling too high, default value is original height
        MAX_BLEEDING
            prevent slider from bleeding outside too much, default value is 1
            0: contain mode, allow up to 0% to bleed outside, the slider will be all inside parent container
            1: cover mode, allow up to 100% to bleed outside, the slider will cover full area of parent container
            0.1: flex mode, allow up to 10% to bleed outside, this is better way to make full window slider, especially for mobile devices
    */

    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 580;
    var MAX_BLEEDING = 0.128;

    function ScaleSlider() {
        var containerElement = slideshow_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {
            var originalWidth = slideshow_slider.$OriginalWidth();
            var originalHeight = slideshow_slider.$OriginalHeight();

            var containerHeight = containerElement.clientHeight || originalHeight;

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

            //constrain bullets, arrows inside slider area, it's optional, remove it if not necessary
            if (MAX_BLEEDING >= 0 && MAX_BLEEDING < 1) {
                var widthRatio = expectedWidth / originalWidth;
                var heightRatio = expectedHeight / originalHeight;
                var maxScaleRatio = Math.max(widthRatio, heightRatio);
                var minScaleRatio = Math.min(widthRatio, heightRatio);

                maxScaleRatio = Math.min(maxScaleRatio / minScaleRatio, 1 / (1 - MAX_BLEEDING)) * minScaleRatio;
                expectedWidth = Math.min(expectedWidth, originalWidth * maxScaleRatio);
                expectedHeight = Math.min(expectedHeight, originalHeight * maxScaleRatio);
            }

            //scale the slider to expected size
            slideshow_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

            //position slider at center in vertical orientation
            slideshow_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

            //position slider at center in horizontal orientation
            slideshow_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    function OnOrientationChange() {
        ScaleSlider();
        window.setTimeout(ScaleSlider, 800);
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", OnOrientationChange);
    /*#endregion responsive code end*/
};