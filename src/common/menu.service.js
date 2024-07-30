(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getMenuItems = function (category) {
            return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
                return response.data;
            });
        };

        service.getMenuItem = function (shortName) {
            return $http.get(ApiPath + '/menu_items.json')
                .then(function (response) {
                    var foundMenuItem=null;
                    var categoryShortName;
                    if (response.data != null) {
                        angular.forEach(response.data, function (category) {
                            return angular.forEach(category.menu_items, function (menuItem) {
                                if (menuItem.short_name == shortName) {
                                    foundMenuItem= menuItem;
                                    categoryShortName= category.category.short_name;
                                }
                            });
                        });
                    }
                    return { item:foundMenuItem, category:categoryShortName};
                })
                .catch(function (error) {
                    throw error;
                });

        };

    }


})();
