(function () {
    "use strict"

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['NewsletterService', 'MenuService'];

    function SignUpController(NewsletterService, MenuService) {
        var $ctrl = this;
        $ctrl.dishNotFound = false;
        $ctrl.registrationSuccessful = false;


        $ctrl.signUp = function (event) {
            event.preventDefault();
            var userData = {
                firstName: $ctrl.firstName,
                lastName: $ctrl.lastName,
                eMail: $ctrl.eMail,
                phoneNumber: $ctrl.phoneNumber,
                menuNumber: $ctrl.menuNumber
            };

            MenuService.getMenuItem($ctrl.menuNumber)
                .then(function (data) {
                    if (data.item != null) {
                        userData.menuItem = data.item;
                        userData.category = data.category;
                        $ctrl.dishNotFound = false;
                        NewsletterService.setPersonData(userData);
                        $ctrl.registrationSuccessful = true;
                    }else {
                        $ctrl.registrationSuccessful = false;
                        $ctrl.dishNotFound = true;
                    }
                }, function (error) {
                    $ctrl.registrationSuccessful = false;
                    $ctrl.dishNotFound = true;
                });

        };
    }
})();