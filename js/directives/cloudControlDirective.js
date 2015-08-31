angular.module("CloudPcr").directive("teddyinput", [function () {

    return {
        require: [/*'^cloudTab', '^cloudWidget'*/],
        scope: true,
        transclude: true,
        templateUrl: "/html/Templates/teddyInputTemplate.html",
        priority: 0,
        restrict: "E",
        link: function (scope, element, attrs) {
            var controlData = scope.data = pcrFormControls[attrs.name];
            if (controlData == null)
                throw "'" + attrs.name + "' is not a valid element";
            var $input = $("input", element);

            if (controlData.DataType == "DateTimeType")
                handleDateTime($input, controlData);

            else if (!((controlData.minLength.length > 0 || controlData.maxLength.length > 0 || controlData.pattern.length > 0) && controlData.options.length == 0 && controlData.MaxOccurs == "1"))
                handleSelect2($input, controlData);

            delete controlData;
            //delete scope.data;

            //element.replaceWith(element.children());
        }
    };

    function handleDateTime($input, controlData) {
        $input.datetimepicker({
            format: "yyyy-mm-ddThh:ii:ssZ",
            startDate: new Date("1950-01-01T00:00:00-00:00"),
            endDate: new Date("2050-01-01T00:00:00-00:00"),
            autoclose: true,
            startView: 'hour',
            todayHighlight: true,
            minuteStep: 1,
            initialDate: new Date()
        });
    }

    function handleSelect2($input, controlData) {

        var options = {
            multiple: controlData.MaxOccurs == "M",
            allowClear: true
        };

        if (options.multiple)
            options.tags = controlData.options;
        else
            options.data = controlData.options;

        if (controlData.maxLength.length > 0)
            options.maximumInputLength = parseInt(controlData.maxLength);

        if (controlData.minLength.length > 0)
            options.minimumInputLength = parseInt(controlData.minLength);

        if (controlData.pattern.length > 0) {
            options.formatNoMatches = "Please follow the pattern: " + controlData.pattern;
            options.createSearchChoice = function (term) {
                var regexp = new RegExp("^" + controlData.pattern + "$");
                if (regexp.test(term)) {
                    return {
                        id: term,
                        text: term
                    };
                }
            }
        }

        $input.select2(options);

    }

}]);