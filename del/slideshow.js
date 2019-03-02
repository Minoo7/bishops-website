slideshow = function() {

    var slideshow_options = {
      /*$AutoPlay: 1,
      //$FillMode: 1,
      $Idle: 20000,
      /*$ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
    },*/
      /*$BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }*/
    };
    var slideshow_slider = new $JssorSlider$("slideshow", slideshow_options);     
    /*#region responsive code begin*/       
    /*var MAX_WIDTH = 980;
    function ScaleSlider() {
        var containerElement = slideshow_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;      
        if (containerWidth) {       
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);      
            /*slideshow_slider.$ScaleWidth(expectedWidth);*/
            //slideshow_slider.$ScaleWidth(400);
        /*}
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }*/
    /*ScaleSlider();    
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};