angular.module("CloudPcr").directive("cloudWidget", ["$compile", function ($compile) {

    return {
        require: [/*'^cloudTab'*/],
        //scope: {
        //    name: '='
        //},
        transclude: true,
        templateUrl: "/html/Templates/cloudWidgetTemplate.html",
        priority: 1,
        restrict: "E",
        link: function (scope, element, attrs) {
            element.css("padding", "0");
            $(".portlet-title #title", element).html(attrs.name);
            if (attrs.icon)
                $(".portlet-title i", element).addClass("fa-" + attrs.icon);
            else
                $(".portlet-title i", element).remove();
            element.children().addClass(attrs.color || "blue");
            //element.children().addClass(attrs.class || "");
            //element.replaceWith(element.children());
        }
    };

}]);