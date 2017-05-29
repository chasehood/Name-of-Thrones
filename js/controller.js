angular.module('noServer').controller('mainCtrl',function($scope,mainSrv){
       mainSrv.getPetNames().then(function(response){
        $scope.names=mainSrv.getNames(response.data)
            $scope.petNames = response.data
            
        })
            console.log($scope.petNames)
    

})