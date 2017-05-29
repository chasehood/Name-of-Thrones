angular.module('noServer').service('mainSrv', function ($http) {
    this.getPetNames = function () {
        return $http.get('https://api.got.show/api/characters')
    }
}) 
    this.getNames = function (response) {
        var names = []
        var firstName = [];
        var lastName = [];
        for (var i = 0; i < response.length; i++) {

            names.push(response[i].name)
        }
        console.log(names)
        names.map(function(e) {
            var newNames = e.split(' ')
            firstName.push(newName[0])
        })
        // console.log(firstName)