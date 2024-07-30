(function (){
    "use strict";

    angular.module('common')
        .service('NewsletterService',NewsletterService);

    NewsletterService.$inject = [];
    function NewsletterService(){
        var service =this;
        var personData;

        service.setPersonData= function (newPerson){
            personData= {
                firstName: newPerson.firstName,
                lastName:newPerson.lastName,
                eMail:newPerson.eMail,
                phoneNumber:newPerson.phoneNumber,
                menuNumber:newPerson.menuNumber,
                menuItem:newPerson.menuItem,
                menuCategory:newPerson.category
            };
        };

        service.getPersonData= function (){
            return personData;
        };
    }
})();