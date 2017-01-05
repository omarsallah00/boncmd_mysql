(function() {
    'use strict';
    angular
        .module('boncmd6App')
        .factory('Commande', Commande);

    Commande.$inject = ['$resource', 'DateUtils'];

    function Commande ($resource, DateUtils) {
        var resourceUrl =  'api/commandes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateCommande = DateUtils.convertDateTimeFromServer(data.dateCommande);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
