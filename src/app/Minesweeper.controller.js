(function() {
    'use strict';

    angular
        .module('app')
        .controller('minesweeperController', minesweeperController); 
        
        minesweeperController.$inject = [];

        function minesweeperController() {
            var vm = this;
            var minefield = {};
            minefield.rows = [];

            for(var i = 0; i < 9; i++) {
                var row = {};
                row.spots = [];

                for(var j = 0; j < 9; j++) {
                    var spot = {};
                    spot.isRevealed = false;
                    row.spots.push(spot);
                }

                minefield.rows.push(row);
            }
            return minefield;
        }
})();