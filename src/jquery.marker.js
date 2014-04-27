(function($) {
	$.fn.marker = function(options) {
		var settings = $.extend({
            color: (options && options.color) || '#FFFF00'
		}, options);

		options = $.extend(settings, options);

        $(this).bind("mousedown", function() {
            $("head style#marker-style").remove();
            $("head").append("<style id=\"marker-style\">\
                ::selection { background: " + options.color + "; }\
                ::-moz-selection { background: " + options.color + "; }\
            </style>");
                    
            document.designMode = "on";

        }).bind("mouseup", function() {
            var sel = window.getSelection();
            var range = sel.getRangeAt(0);

            if (sel && range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }

            if (!document.execCommand("hilitecolor", false, options.color)) {
                document.execCommand("backcolor", false, options.color);
            }

            if(sel) {
                sel.removeAllRanges();
            }

            document.designMode = "off";
        });
    };
}(jQuery));

