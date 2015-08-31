angular.module("CloudPcr").controller('pcrFormController', ['$scope', function ($scope) {
    
    $scope.pcr = {};

    $scope.help = function (data) {
        $scope.helpData = data;
        $("#elementHelpModal").modal("show");
    }

    $scope.change = function (tab) {
        if (!tab)
            tab = $("[name='Some Tab'].active").length > 0 ? 'Some Other Tab' : 'Some Tab' // temp functionality
        $("cloud-tab.active").removeClass("active");
        $("[name='" + tab + "']").addClass("active");
    }
}]);