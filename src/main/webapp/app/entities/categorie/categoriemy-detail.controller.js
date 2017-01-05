(function() {
    'use strict';

    angular
        .module('boncmd6App')
        .controller('CategorieMyDetailController', CategorieMyDetailController);

    CategorieMyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Categorie'];

    function CategorieMyDetailController($scope, $rootScope, $stateParams, previousState, entity, Categorie) {
        var vm = this;

        vm.categorie = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('boncmd6App:categorieUpdate', function(event, result) {
            vm.categorie = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
