//slideshow = function() {
function slideshow() {

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

    //slideshow_slider.$ScaleSize(100%, 200, 1);

    //var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        
        var bodyWidth = document.body.clientWidth;
        //slideshow_slider.$ScaleWidth(100, 190, 1);
        //if (bodyWidth)
        
        //slideshow_slider.$ScaleWidth(Math.min(bodyWidth, 1920));

        //var thewidth = Math.min(bodyWidth, 1920);
        slideshow_slider.$ScaleSize(bodyWidth, 200, 0.128);
    }
    ScaleSlider();

    /*$(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);*/

    function OnOrientationChange() {
        ScaleSlider();
        window.setTimeout(ScaleSlider, 800);
    }

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    /*$Jssor$.$AddEvent(window, "fullscreenchange", ScaleSlider);
    document.addEvent(window, "fullscreenchange", function(event) {
        ScaleSlider();
    });*/
    $Jssor$.$AddEvent(window, "orientationchange", OnOrientationChange);
    /*#endregion responsive code end*/
};

function garbal() {
    bajs();
}

function bajs() {
    document.getElementsByTagName("BODY")[0].style.display = "none";
}

/*function ScaleSlider() {

    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 580;
    var MAX_BLEEDING = 0.128;

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
        document.getElementsByTagName("img")[0].style.display = "none";
        //window.setTimeout(ScaleSlider, 30);
    }
}*/