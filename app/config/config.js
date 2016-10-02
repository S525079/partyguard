var angular = angular.module("PartyGuard", [  'ngRoute',
  'ngCookies']);

angular.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Login", {
            templateUrl: "/public/view/Navbar/Login.html",
            controller: "LoginController" })
        .when("/AddCustomer", {
            templateUrl: "/public/view/MasterUser/AddCustomer.html",
          controller: "FraternityController" })
          .when("/AddAck", {
              templateUrl: "/public/view/MasterUser/AddAck.html",
            controller: "FraternityController" })
          .when("/Hostnew", {
              templateUrl: "/public/view/HostUser/newCustomer.html",
            controller: "HostUserController" })
      .when("/Hostprofile", {
                templateUrl: "/public/view/HostUser/HostProfile.html",
               controller: "HostUserController" })

       .when("/HouseLocation", {
                         templateUrl: "/public/view/HostUser/HouseLocation.html",
                        controller: "HostUserController" })
      .when("/Events", {
                templateUrl: "/public/view/HostUser/Events.html",
               controller: "HostUserController" })
       .when("/Members", {
                 templateUrl: "/public/view/HostUser/Members.html",
                controller: "membersController" })
        .when("/Guard", {
                templateUrl: "/public/view/GuardUser/GuardProfile.html",
              controller: "GuardUserController" })
        .when("/Basic", {
                  templateUrl: "/public/view/BasicUser/BasicProfile.html",
                controller: "BasicUserController" })
        .when("/AboutUS", {
                          templateUrl: "/public/view/Navbar/Aboutus.html",
                        controller: "LoginController" })
      .when("/ContactUs", {
                        templateUrl: "/public/view/Navbar/ContactUs.html",
                        controller: "LoginController" })
        .when("/faq", {
                      templateUrl: "/public/view/Navbar/faq.html",
                      controller: "LoginController" })
        .when("/HowitWorks", {
                      templateUrl: "/public/view/Navbar/Howitworks.html",
                      controller: "LoginController" })
         .when("/", {
                templateUrl: "/public/view/default/default.html" })
        .otherwise({
            templateUrl: "/public/view/default/default.html",
            controller: "DefaultCtrl" });

    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});

angular.controller("maincontroller", ['$scope',
function ($scope) {



    $scope.isUserLoggedIn = false;

}]);