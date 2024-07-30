(function (){
    "use strict"

    angular.module('public')
        .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject=['NewsletterService'];

    function MyInfoController(NewsletterService){
        var $ctrl=this;
        $ctrl.userNotExist=true;

        $ctrl.user=NewsletterService.getPersonData();
        if($ctrl.user)
        {
            $ctrl.userNotExist=false;
        }
    }




})();