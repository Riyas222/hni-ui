!function(n){function o(i){if(t[i])return t[i].exports;var a=t[i]={exports:{},id:i,loaded:!1};return n[i].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var t={};return o.m=n,o.c=t,o.p="",o(0)}([function(n,o,t){t(1),n.exports=t(44)},function(n,o,t){"use strict";function i(n,o){n.keys().forEach(function(t){null==o?n(t):o.indexOf(t)==-1&&n(t)})}t(2),i(t(3),["./app.module.js","./index.js"]),i(t(39)),i(t(40)),i(t(42))},function(n,o){"use strict";!function(){angular.module("app",["ui.router","ngMaterial"])}()},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./app.config.js":4,"./app.constants.js":5,"./app.module.js":2,"./app.route.js":6,"./app.run.js":7,"./index.js":1};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=3},function(n,o){"use strict";!function(){function n(n){}angular.module("app").config(n),n.$inject=["$httpProvider"]}()},function(n,o){"use strict";!function(){angular.module("app").constant("serviceConstants",{baseUrl:"http://hni-dev.southcentralus.cloudapp.azure.com:8080/hni-admin/api"})}()},function(n,o){"use strict";!function(){function n(n,o){o.otherwise("/dashboard"),n.state("dashboard",{url:"/dashboard",template:"<dashboard></dashboard>"})}angular.module("app").config(n),n.$inject=["$stateProvider","$urlRouterProvider"]}()},function(n,o,t){"use strict";!function(){function n(n){function o(o,i){o.keys().forEach(function(o){null==i?n.put(o.slice(2),t(16)("./"+o.slice(2))):i.indexOf(o)==-1&&n.put(o.slice(2),t(16)("./"+o.slice(2)))})}function i(o){o.keys().forEach(function(o){var i=o.slice(2).lastIndexOf("/"),a=o.slice(2).slice(i+1);n.put(a,t(17)("./"+o.slice(2)))})}o(t(8),["./index.html"]),i(t(10))}angular.module("app").run(n),n.$inject=["$templateCache"]}()},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./index.html":9};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=8},function(n,o){n.exports="<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <title>HNI</title> </head> <body ng-app=app> <div ui-view></div> </body> </html>"},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./dashboard/actionCard/action-card.tpl.html":11,"./dashboard/actionsSection/actions-section.tpl.html":12,"./dashboard/organizationCard/organization-card.tpl.html":13,"./dashboard/organizationSection/organization-section.tpl.html":14,"./dashboard/topNav/top-nav.tpl.html":15};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=10},function(n,o){n.exports='<md-card class=action-card> <div class="action-card-icon material-icons">{{::vm.icon}}</div> <div>{{::vm.iconText}}</div> <div class=action-card-bg></div> </md-card>'},function(n,o){n.exports='<div class=action-cards-section layout=row layout-wrap ng-if="vm.userRole == 1"> <action-card flex-gt-sm=25 flex=100 icon=&#xE561; icon-text="+ Providers"></action-card> <action-card flex-gt-sm=25 flex=100 icon=&#xE87C; icon-text="+ Clients"></action-card> <action-card flex-gt-sm=25 flex=100 icon=&#xE7FB; icon-text="+ Volunteers"></action-card> <action-card flex-gt-sm=25 flex=100 icon=&#xE0DA; icon-text="+ Access Code"></action-card> </div> <div class=action-cards-section layout=row layout-wrap ng-if="vm.userRole == 2"> <action-card flex-gt-sm=33 flex=100 icon=&#xE87C; icon-text="+ Clients"></action-card> <action-card flex-gt-sm=33 flex=100 icon=&#xE7FB; icon-text="+ Volunteers"></action-card> <action-card flex-gt-sm=33 flex=100 icon=&#xE0DA; icon-text="+ Access Code"></action-card> </div> <div ng-if="vm.userRole != 1 && vm.userRole != 2"> <div id=welcome-section> <span class=material-icons>&#xE420;</span> <h1>Welcome!</h1> </div> <p class=welcome-paragraph>Thank you for volunteering. Please select the organization you will be placing orders for below.</p> </div>'},function(n,o){n.exports="<md-card class=organization-card> <div class=org-image-header><img ng-src={{vm.logo}} /></div> <div class=org-info-section> <div class=org-card-name>{{vm.name}}</div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE0C8;</span> <span>Address:</span> </div> <div flex=70>{{vm.address}}</div> </div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE0CD;</span> <span>Phone:</span> </div> <div flex=70>{{vm.phone}}</div> </div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE192;</span> <span>Hours:</span> </div> <div flex=70>{{vm.hours}}</div> </div> </div> <md-button class=org-view-button md-ink-ripple=#D65439>View Workspace</md-button> </md-card>"},function(n,o){n.exports='<div class=org-header layout=row> <div flex=80>Organizations</div> <div class=org-search flex=20> <div class=input-expandable> <input type=text id=org-search filter-input=vm.orgs filter-name=orgFilter> <label for=org-search></label> </div> </div> </div> <div class=action-cards-section layout=row layout-wrap> <action-card flex-gt-sm=25 flex=100 icon=&#xE8EF; icon-text="View All"></action-card> <organization-card flex-gt-sm=25 flex=100 ng-repeat="item in vm.orgs" logo=item.logo name=item.name address=item.address phone=item.phone hours=item.hours></organization-card> </div>'},function(n,o){n.exports='<md-toolbar id=top-nav> <div class=md-toolbar-tools> <div id=not-impossible-logo ui-sref=dashboard><img ng-src=app/assets/images/not_impossible_logo.png /></div> <span flex></span> <div id=user-name>{{::vm.username}}</div> <div class="account-icon material-icons"><span md-ink-ripple=#D65439>&#xE853;</span><span md-ink-ripple=#D65439>&#xE5CF;</span></div> </div> </md-toolbar>'},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./index.html":9};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=16},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./dashboard/actionCard/action-card.style.scss":18,"./dashboard/actionCard/action-card.tpl.html":11,"./dashboard/actionCard/actionCard.component":22,"./dashboard/actionCard/actionCard.component.js":22,"./dashboard/actionsSection/actions-section.style.scss":23,"./dashboard/actionsSection/actions-section.tpl.html":12,"./dashboard/actionsSection/actionsSection.component":25,"./dashboard/actionsSection/actionsSection.component.js":25,"./dashboard/dashboard.component":26,"./dashboard/dashboard.component.js":26,"./dashboard/dashboard.style.scss":27,"./dashboard/organizationCard/organization-card.style.scss":29,"./dashboard/organizationCard/organization-card.tpl.html":13,"./dashboard/organizationCard/organizationCard.component":31,"./dashboard/organizationCard/organizationCard.component.js":31,"./dashboard/organizationSection/orgFilter.filter":32,"./dashboard/organizationSection/orgFilter.filter.js":32,"./dashboard/organizationSection/organization-section.style.scss":33,"./dashboard/organizationSection/organization-section.tpl.html":14,"./dashboard/organizationSection/organizationSection.component":35,"./dashboard/organizationSection/organizationSection.component.js":35,"./dashboard/topNav/top-nav.style.scss":36,"./dashboard/topNav/top-nav.tpl.html":15,"./dashboard/topNav/topNav.component":38,"./dashboard/topNav/topNav.component.js":38};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=17},function(n,o){},,,,function(n,o){"use strict";!function(){function n(n){var o=this;o.$onInit=function(){}}angular.module("app").component("actionCard",{bindings:{icon:"@",iconText:"@",bgImage:"@"},templateUrl:"action-card.tpl.html",controller:n,controllerAs:"vm"}),n.$inject=["$element"]}()},function(n,o){},,function(n,o){"use strict";!function(){function n(n){var o=this;o.$onInit=function(){n.getUser();o.userRole=1}}angular.module("app").component("actionsSection",{bindings:{},templateUrl:"actions-section.tpl.html",controller:n,controllerAs:"vm"}),n.$inject=["userService"]}()},function(n,o){"use strict";!function(){angular.module("app").component("dashboard",{bindings:{},template:'<top-nav></top-nav>\n                        <div id="dashboard-section">\n                            <actions-section></actions-section>\n                            <organization-section></organization-section>\n                        </div>'})}()},function(n,o){},,function(n,o){},,function(n,o){"use strict";!function(){function n(){var n=this;n.$onInit=function(){}}angular.module("app").component("organizationCard",{bindings:{logo:"<",name:"<",address:"<",phone:"<",hours:"<"},templateUrl:"organization-card.tpl.html",controller:n,controllerAs:"vm"})}()},function(n,o){"use strict";!function(){function n(){return function(n,o){var t=[];return angular.forEach(n,function(n){null!=n.name&&n.name.toLowerCase().indexOf(o.toLowerCase())>=0&&t.push(n)}),t}}angular.module("app").filter("orgFilter",n)}()},function(n,o){},,function(n,o){"use strict";!function(){function n(n){var o=this;o.$onInit=function(){o.orgs=n.getOrganizations()}}angular.module("app").component("organizationSection",{bindings:{logo:"@"},templateUrl:"organization-section.tpl.html",controller:n,controllerAs:"vm"}),n.$inject=["userService"]}()},function(n,o){},,function(n,o){"use strict";!function(){function n(n){var o=this;o.$onInit=function(){n.getUser();o.username="veronica.bagwell@walmart.com"}}angular.module("app").component("topNav",{bindings:{},templateUrl:"top-nav.tpl.html",controller:n,controllerAs:"vm"}),n.$inject=["userService"]}()},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./dashboard/actionCard/actionCard.component.js":22,"./dashboard/actionsSection/actionsSection.component.js":25,"./dashboard/dashboard.component.js":26,"./dashboard/organizationCard/organizationCard.component.js":31,"./dashboard/organizationSection/orgFilter.filter.js":32,"./dashboard/organizationSection/organizationSection.component.js":35,"./dashboard/topNav/topNav.component.js":38};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=39},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./filterInput/filterInput.directive.js":41};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=40},function(n,o){"use strict";!function(){function n(n){function o(o,t,i){var a=angular.copy(o.filterInput);t.on("input",function(){o.$apply(function(){i.filterName?o.filterInput=n(i.filterName)(a,t[0].value):o.filterInput=n("filter")(a,t[0].value)})})}return{restrict:"A",scope:{filterInput:"="},link:o}}angular.module("app").directive("filterInput",n),n.$inject=["$filter"]}()},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./userService.service.js":43};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=42},function(n,o){"use strict";!function(){function n(n,o){function t(){return s}function i(){n.get(d+"/user/1").then(a)["catch"](e)}function a(n){var o=n.data;s.firstName=o.firstName,s.lastName=o.lastName,s.mobilePhone=o.mobilePhone,s.email=o.email}function e(n){}function r(){for(var n=0;n<5;n++)c.push({name:"Samaritan Community Center",address:"2510 N 17th St #203Rogers, AR 72756",phone:"(479) 246-0104",hours:"Open today · 9AM–4PM",logo:"app/assets/images/scc_logo.jpg"}),c.push({name:"Care Community Center",address:"2510 N 17th St #203Rogers, AR 72756",phone:"(479) 246-0104",hours:"Open today · 9AM–4PM",logo:"app/assets/images/scc_logo.jpg"});return c}var s={firstName:"",lastName:"",mobilePhone:"",email:""},c=[],d=o.baseUrl;return i(),{getUser:t,setUser:i,getOrganizations:r}}angular.module("app").factory("userService",n),n.$inject=["$http","serviceConstants"]}()},function(n,o,t){"use strict";function i(n,o){n.keys().forEach(function(t){null==o?n(t):o.indexOf(t)==-1&&n(t)})}i(t(45)),i(t(56))},function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./_functions.scss":46,"./_includes.scss":48,"./_mixins.scss":50,"./_variables.scss":52,"./base.scss":54};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=45},function(n,o){},,function(n,o){},,function(n,o){},,function(n,o){},,function(n,o){},,function(n,o,t){function i(n){return t(a(n))}function a(n){return e[n]||function(){throw new Error("Cannot find module '"+n+"'.")}()}var e={"./dashboard/actionCard/action-card.style.scss":18,"./dashboard/actionsSection/actions-section.style.scss":23,"./dashboard/dashboard.style.scss":27,"./dashboard/organizationCard/organization-card.style.scss":29,"./dashboard/organizationSection/organization-section.style.scss":33,"./dashboard/topNav/top-nav.style.scss":36};i.keys=function(){return Object.keys(e)},i.resolve=a,n.exports=i,i.id=56}]);
//# sourceMappingURL=app.js.map