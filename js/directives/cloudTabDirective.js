angular.module("CloudPcr").directive("cloudTab", [function () {

    return {
        require: [/*'^cloudTab'*/],
        //scope: {
        //    name: '='
        //},
        transclude: true,
        templateUrl: "/html/Templates/cloudTabTemplate.html",
        priority: 2,
        restrict: "E",
        link: function (scope, element, attrs) {
            //element.css("padding", "0");
            $(".page-title", element).html(attrs.name);
            //element.replaceWith(element.children());
        }
    };

}]);