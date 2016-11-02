!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){t(1),e.exports=t(94)},function(e,n,t){"use strict";function o(e,n){e.keys().forEach(function(t){null==n?e(t):n.indexOf(t)==-1&&e(t)})}t(2),o(t(3),["./app.module.js","./index.js"]),o(t(87)),o(t(90)),o(t(92)),o(t(93))},function(e,n){"use strict";!function(){angular.module("app",["ui.router","ngMaterial"])}()},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./app.config.js":4,"./app.constants.js":5,"./app.module.js":2,"./app.route.js":6,"./app.run.js":7,"./index.js":1};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=3},function(e,n){"use strict";!function(){function e(e){}angular.module("app").config(e),e.$inject=["$httpProvider"]}()},function(e,n){"use strict";!function(){angular.module("app").constant("serviceConstants",{baseUrl:"http://hni-dev.southcentralus.cloudapp.azure.com:8080/hni-admin/api/v1"})}()},function(e,n){"use strict";!function(){function e(e,n){n.otherwise("/dashboard"),e.state("dashboard",{url:"/dashboard",template:"<dashboard></dashboard>"}).state("login",{url:"/login",template:"<login></login>"}).state("workspace-base",{"abstract":!0,templateUrl:"workspace-base.tpl.html"}).state("order-detail",{parent:"workspace-base",url:"/order-detail",template:"<order-detail></order-detail>"}).state("user-profile",{url:"/user-profile",template:"<user-profile></user-profile>"}).state("clients",{parent:"workspace-base",url:"/clients",template:"<clients></clients>"}).state("organizations",{url:"/organizations",template:"<organizations></organizations>"}).state("volunteers",{parent:"workspace-base",url:"/volunteers",template:"<volunteers></volunteers>"})}angular.module("app").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}()},function(e,n,t){"use strict";!function(){function e(e,n){function o(n,o){n.keys().forEach(function(n){null==o?e.put(n.slice(2),t(30)("./"+n.slice(2))):o.indexOf(n)==-1&&e.put(n.slice(2),t(30)("./"+n.slice(2)))})}function i(n){n.keys().forEach(function(n){var o=n.slice(2).lastIndexOf("/"),i=n.slice(2).slice(o+1);e.put(i,t(31)("./"+n.slice(2)))})}function a(n){n.keys().forEach(function(n){var o=n.slice(2).lastIndexOf("/"),i=n.slice(2).slice(o+1);e.put(i,t(83)("./"+n.slice(2)))})}o(t(8),["./index.html"]),i(t(11)),a(t(28)),n.setUser()}angular.module("app").run(e),e.$inject=["$templateCache","userService"]}()},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./index.html":9,"./workspace-base.tpl.html":10};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=8},function(e,n){e.exports='<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width"> <title>HNI</title> </head> <body ng-app=app> <div ui-view></div> </body> </html>'},function(e,n){e.exports='<top-nav> <md-nav-bar md-selected-nav-item=orders nav-bar-aria-label="navigation links"> <md-nav-item md-nav-sref=dashboard name=dashboard>Dashboard</md-nav-item> <md-nav-item md-nav-sref=order-detail name=orders>Orders</md-nav-item> <md-nav-item md-nav-sref=clients name=clients>Clients</md-nav-item> <md-nav-item md-nav-sref=volunteers name=volunteers>Volunteers</md-nav-item> </md-nav-bar> </top-nav> <div ui-view></div>'},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./clients/clients.tpl.html":12,"./dashboard/actionCard/action-card.tpl.html":13,"./dashboard/actionsSection/actions-section.tpl.html":14,"./dashboard/organizationCard/organization-card.tpl.html":15,"./dashboard/organizationSection/organization-section.tpl.html":16,"./login/login.tpl.html":17,"./orderDetail/order-complete.tpl.html":18,"./orderDetail/order-detail.tpl.html":19,"./organizations/organizations.tpl.html":20,"./profile/user/profileHeader/profile-header.tpl.html":21,"./profile/user/profileOrganizationCard/profile-organization-card.tpl.html":22,"./profile/user/profileOrganizations/profile-organizations.tpl.html":23,"./profile/user/user-profile.tpl.html":24,"./shared/listTable/list-table.tpl.html":25,"./viewEditModalService/view-edit-modal-service.tpl.html":26,"./volunteers/volunteers.tpl.html":27};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=11},function(e,n){e.exports="<div id=clients-container> <list-table headerfields=vm.headerFields items=vm.items></list-table> </div>"},function(e,n){e.exports='<md-card ng-click=vm.navigate() class=action-card> <div class="action-card-icon material-icons">{{::vm.icon}}</div> <div>{{::vm.iconText}}</div> </md-card>'},function(e,n){e.exports='<div class=action-cards-section layout=row layout-wrap ng-if="vm.userRole == 1"> <action-card flex-sm=50 flex-gt-sm=25 flex=100 icon=&#xE561; icon-text="+ Providers"></action-card> <action-card path=/clients flex-sm=50 flex-gt-sm=25 flex=100 icon=&#xE87C; icon-text="+ Clients"></action-card> <action-card path=/volunteers flex-sm=50 flex-gt-sm=25 flex=100 icon=&#xE7FB; icon-text="+ Volunteers"></action-card> <action-card flex-sm=50 flex-gt-sm=25 flex=100 icon=&#xE0DA; icon-text="+ Access Code"></action-card> </div> <div class=action-cards-section layout=row layout-wrap ng-if="vm.userRole == 2"> <action-card flex-gt-sm=33 flex=100 icon=&#xE87C; icon-text="+ Clients"></action-card> <action-card flex-gt-sm=33 flex=100 icon=&#xE7FB; icon-text="+ Volunteers"></action-card> <action-card flex-gt-sm=33 flex=100 icon=&#xE0DA; icon-text="+ Access Code"></action-card> </div> <div ng-if="vm.userRole != 1 && vm.userRole != 2"> <div id=welcome-section> <span class=material-icons>&#xE420;</span> <h1>Welcome!</h1> </div> <p class=welcome-paragraph>Thank you for volunteering. Please select the organization you will be placing orders for below.</p> </div>'},function(e,n){e.exports="<md-card class=organization-card> <div class=org-image-header><img ng-src={{vm.logo}} /></div> <div class=org-info-section> <div class=org-card-name>{{vm.name}}</div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE0C8;</span> <span>Address:</span> </div> <div flex=70>{{vm.address}}</div> </div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE0CD;</span> <span>Phone:</span> </div> <div flex=70>{{vm.phone}}</div> </div> <div class=org-card-info layout=row> <div flex=30> <span class=material-icons>&#xE192;</span> <span>Website:</span> </div> <a ng-href={{vm.website}} flex=70>{{vm.website}}</a> </div> </div> <md-button class=org-view-button md-ink-ripple=#D65439 ng-click=vm.enterOrg()>View Workspace</md-button> </md-card>"},function(e,n){e.exports='<div class=org-header layout=row> <div flex=80>Organizations</div> <div class=org-search flex=20> <div class=input-expandable> <input type=text id=org-search filter-input=vm.orgs filter-name=orgFilter> <label for=org-search></label> </div> </div> </div> <div class=action-cards-section layout=row layout-wrap> <action-card path=/organizations flex-sm=50 flex-gt-sm=33 flex-gt-md=25 flex=100 icon=&#xE8EF; icon-text="View All" ng-if="vm.userRole == 1"></action-card> <organization-card flex-sm=50 flex-gt-sm=33 flex-gt-md=25 flex=100 ng-repeat="item in vm.orgs" logo=item.logo name=item.name address=item.address phone=item.phone website=item.website></organization-card> </div>'},function(e,n){e.exports='<div id=login-container> <div class=login-box layout=row layout-wrap> <md-content class=md-whiteframe-4dp> <div class=login-image-container> <img class=login-logo ng-src=app/assets/images/not_impossible_logo.png /> </div> <div class=login-prompt>Login to your account by filling the form below.</div> <md-input-container class=md-block flex-gt-sm> <label>Email</label> <input type=email ng-model=username> </md-input-container> <md-input-container class="md-block password-container" flex-gt-sm> <label>Password</label> <input type={{vm.inputType}} ng-model=password class=visible> <i class=material-icons ng-class="{\'active\': vm.isActive}" ng-click=vm.togglePassword()>&#xE417;</i> </md-input-container> <md-button class="md-raised button-primary" ng-click=vm.signIn()>Sign In</md-button> </md-content> </div> </div>'},function(e,n){e.exports='<md-dialog class=small-prompt> <md-dialog-content> <div layout=row layout-wrap> <i class=material-icons flex=100>&#xE8DC;</i> <div class=small-prompt-header flex=100>AWESOME!</div> <div class=small-prompt-text flex=100>This order is now marked complete.</div> <div class=small-prompt-subtext flex=100>25 orders remaining.</div> </div> </md-dialog-content> <md-dialog-actions> <md-button class=button-primary md-ink-ripple=#D65439>Finish</md-button> <md-button class="md-raised button-primary" ng-click=vm.hide()>Next Order</md-button> </md-dialog-actions> </md-dialog>'},function(e,n){e.exports='<div id=order-detail-container> <md-card class=order-detail-card layout=row layout-wrap> <div id=order-details flex=100 flex-gt-xs=50> <div class=order-details-header-container> <i class=material-icons>&#xE56C;</i> <div> <div class=order-details-header>Order For</div> <div class=order-details-name>{{::vm.user.name}}</div> </div> </div> <div class=food-details> <div class=food-details-header> {{::vm.orderInfo.name}} </div> <div class=food-details-item ng-repeat="item in vm.orderInfo.foodItems track by $index"> {{item}} </div> </div> <md-button class="md-raised button-primary" ng-click=vm.completeOrder()>Mark As Complete</md-button> </div> <div class=right-side-container flex=100 flex-gt-xs=50> <div id=restaurant-info> <div class=order-time> <i class=material-icons>&#xE192;</i> <div>{{vm.orderInfo.time}}</div> </div> <div class=restaurant-info-address> <i class=material-icons>&#xE0C8;</i> <div> <div class=restaurant-name>{{::vm.orderInfo.name}}</div> <div>{{::vm.orderInfo.address}}</div> <div>{{::vm.orderInfo.phone}}</div> </div> </div> <div> <i class=material-icons>&#xE80B;</i> <a class=restaurant-info-site ng-href=#/dashboard>{{::vm.orderInfo.website}}</a> </div> </div> <div class=order-customer-info> <div> <i class=material-icons>&#xE87C;</i> <div class=order-customer-info-header>{{::vm.user.name}}</div> </div> <div> <div></div> <div class=order-details-number>{{::vm.user.phone}}</div> </div> <div> <div></div> <div class=order-details-number>{{::vm.user.email}}</div> </div> <div> <div></div> <div class=order-details-number>{{::vm.user.organization}}</div> </div> </div> </div> <md-button class="md-fab button-primary" hide-gt-xs> <md-icon class=material-icons ng-click=vm.completeOrder()>&#xE5CA;</md-icon> </md-button> </md-card> </div>'},function(e,n){e.exports="<top-nav></top-nav> <div id=organizations-container> <list-table headerfields=vm.headerFields items=vm.items></list-table> </div>"},function(e,n){e.exports='<div class=profile-header> <div class=profile-content> <div class=profile-top-row layout=row> <h1 flex=80>User Settings</h1> <h3 flex=20>Member since 2016</h3> </div> <div layout=row> <img src=/app/assets/images/profile-img.png class=md-card-image alt="profile image"> <div class=user-information layout=column layout-align="start start"> <p class=username>Username</p> <p class=email>email@email.com</p> <p class=phone>555-555-5555</p> <a href ng-click=vm.editInfo()>Edit info </a></div> </div> </div></div>'},function(e,n){e.exports='<md-card class=profile-organization-card> <div class=org-image-header><img ng-src={{vm.logo}} /></div> <div layout=row layout-align="end stretch"> <md-button ng-click=vm.viewProfile() flex=20 class=profile-org-button>View Profile</md-button> <md-button ng-click=vm.viewOrders() flex=20 class=profile-org-button>View Orders</md-button> </div> </md-card>'},function(e,n){e.exports='<div class=profile-organizations> <div class="org-header line-to-right" layout=row> ORGANIZATIONS </div> <div class=action-cards-section layout=row layout-wrap> <profile-organization-card flex-sm=50 flex-gt-sm=25 flex-gt-md=20 flex=100 ng-repeat="item in vm.orgs" logo=item.logo name=item.name address=item.address phone=item.phone hours=item.hours> </profile-organization-card></div> </div>'},function(e,n){e.exports="<top-nav></top-nav> <div id=user-profile-section> <profile-header></profile-header> <profile-organizations></profile-organizations> <md-button ng-click=vm.addOrganization() class=md-fab aria-label=FAB><i class=material-icons>&#xE145;</i></md-button> </div>"},function(e,n){e.exports='<div id=list-table-container class=md-whiteframe-2dp> <table class=md-table> <thead class=md-thead> <tr> <th ng-repeat="field in vm.headerfields" ng-click=vm.sortDataByField(field)>{{ field.displayName }}</th> <th></th> </tr> </thead> <tbody> <tr ng-repeat="item in vm.items" class=md-row> <td ng-repeat="field in vm.headerfields">{{ item[field.key] }}</td> <td class=icons> <md-button> <i class=material-icons>&#xE872;</i> </md-button> <md-button> <i class=material-icons>&#xE417;</i> </md-button> <md-button ng-click=vm.showEdit()> <i class=material-icons>&#xE150;</i> </md-button> </td> </tr> </tbody> </table> </div>'},function(e,n){e.exports='<md-dialog id=client-view-edit-component style=opacity:1 class="" layout=row layout-align=space-around> <md-dialog-content class=profile-fields flex=60> <div class=client-header layout=row> <img src="" alt="Person Logo"> <div layout=column> <p class=client-word>CLIENT</p> <p class=client-name>{{vm.user.firstName}} {{vm.user.lastName}}</p> </div> </div> <md-input-container class=md-block flex-gt-sm> <label>First Name</label> <input type=text ng-model=vm.editingUser.firstName> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Last Name</label> <input type=text ng-model=vm.editingUser.lastName> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Phone Number</label> <input type=phone ng-model=vm.editingUser.mobilePhone> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Email Address</label> <input type=email ng-model=vm.editingUser.email> </md-input-container> <md-dialog-actions> <md-button class="md-raised button-primary" ng-click=vm.hide()>Save</md-button> </md-dialog-actions> </md-dialog-content> <md-dialog-content class=ngo-selection flex=50> <div layout=column layout-wrap> <div class=org-search layout=row> <div class=ngo-header>NGO</div> <div class=input-expandable> <input type=text id=org-search ng-model=search> <label for=org-search></label> </div> </div> <md-checkbox class=orange ng-checked=vm.isSelected(ngo) ng-click=vm.toggleSelection(ngo) ng-repeat="ngo in vm.organizations | filter:search" flex-gt-sm> {{ ngo.name }} </md-checkbox> </div> </md-dialog-content> </md-dialog>'},function(e,n){e.exports="<div id=volunteers-container> <list-table headerfields=vm.headerFields items=vm.items></list-table> </div>"},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./topNav/top-nav.tpl.html":29};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=28},function(e,n){e.exports='<md-toolbar id=top-nav> <div class=md-toolbar-tools> <div hide show-xs> <md-button class=md-icon-button md-ink-ripple=#D65439> <md-icon class=material-icons style=color:#595959>&#xE5D2;</md-icon> </md-button> </div> <div id=not-impossible-logo ui-sref=dashboard><img ng-src=app/assets/images/not_impossible_logo.png /></div> <div id=toolbar-content hide-xs></div> <span flex></span> <div id=user-name hide show-gt-sm>{{vm.user.email}}</div> <div class="account-icon material-icons"><span md-ink-ripple=#D65439>&#xE853;</span><span md-ink-ripple=#D65439>&#xE5CF;</span></div> </div> </md-toolbar>'},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./index.html":9,"./workspace-base.tpl.html":10};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=30},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./clients/clients.component":32,"./clients/clients.component.js":32,"./clients/clients.style.scss":33,"./clients/clients.tpl.html":12,"./dashboard/actionCard/action-card.style.scss":37,"./dashboard/actionCard/action-card.tpl.html":13,"./dashboard/actionCard/actionCard.component":39,"./dashboard/actionCard/actionCard.component.js":39,"./dashboard/actionsSection/actions-section.style.scss":40,"./dashboard/actionsSection/actions-section.tpl.html":14,"./dashboard/actionsSection/actionsSection.component":42,"./dashboard/actionsSection/actionsSection.component.js":42,"./dashboard/dashboard.component":43,"./dashboard/dashboard.component.js":43,"./dashboard/dashboard.style.scss":44,"./dashboard/organizationCard/organization-card.style.scss":46,"./dashboard/organizationCard/organization-card.tpl.html":15,"./dashboard/organizationCard/organizationCard.component":48,"./dashboard/organizationCard/organizationCard.component.js":48,"./dashboard/organizationSection/orgFilter.filter":49,"./dashboard/organizationSection/orgFilter.filter.js":49,"./dashboard/organizationSection/organization-section.style.scss":50,"./dashboard/organizationSection/organization-section.tpl.html":16,"./dashboard/organizationSection/organizationSection.component":52,"./dashboard/organizationSection/organizationSection.component.js":52,"./login/login.component":53,"./login/login.component.js":53,"./login/login.style.scss":54,"./login/login.tpl.html":17,"./orderDetail/order-complete.tpl.html":18,"./orderDetail/order-detail.style.scss":56,"./orderDetail/order-detail.tpl.html":19,"./orderDetail/orderDetail.component":58,"./orderDetail/orderDetail.component.js":58,"./organizations/organizations.component":59,"./organizations/organizations.component.js":59,"./organizations/organizations.style.scss":60,"./organizations/organizations.tpl.html":20,"./profile/user/profileHeader/profile-header.style.scss":62,"./profile/user/profileHeader/profile-header.tpl.html":21,"./profile/user/profileHeader/profileHeader.component":64,"./profile/user/profileHeader/profileHeader.component.js":64,"./profile/user/profileOrganizationCard/profile-organization-card.style.scss":65,"./profile/user/profileOrganizationCard/profile-organization-card.tpl.html":22,"./profile/user/profileOrganizationCard/profileOrganizationCard.component":67,"./profile/user/profileOrganizationCard/profileOrganizationCard.component.js":67,"./profile/user/profileOrganizations/profile-organizations.style.scss":68,"./profile/user/profileOrganizations/profile-organizations.tpl.html":23,"./profile/user/profileOrganizations/profileOrganizations.component":70,"./profile/user/profileOrganizations/profileOrganizations.component.js":70,"./profile/user/user-profile.style.scss":71,"./profile/user/user-profile.tpl.html":24,"./profile/user/userProfile.component":73,"./profile/user/userProfile.component.js":73,"./shared/listTable/list-table.style.scss":74,"./shared/listTable/list-table.tpl.html":25,"./shared/listTable/listTable.component":76,"./shared/listTable/listTable.component.js":76,"./viewEditModalService/view-edit-modal-service.style.scss":77,"./viewEditModalService/view-edit-modal-service.tpl.html":26,"./viewEditModalService/viewEditModalService":79,"./viewEditModalService/viewEditModalService.js":79,"./volunteers/volunteers.component":80,"./volunteers/volunteers.component.js":80,"./volunteers/volunteers.style.scss":81,"./volunteers/volunteers.tpl.html":27};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=31},function(e,n){"use strict";!function(){function e(){var e=this;e.$onInit=function(){e.headerFields=[{key:"name",displayName:"Name",sortable:!0},{key:"phone",displayName:"Phone",sortable:!1},{key:"email",displayName:"Email",sortable:!0},{key:"ngo",displayName:"NGO",sortable:!0}],e.items=[{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"},{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"}]}}angular.module("app").component("clients",{bindings:{},templateUrl:"clients.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=[]}()},function(e,n){},,,,function(e,n){},,function(e,n){"use strict";!function(){function e(e,n){var t=this;t.$onInit=function(){},t.navigate=function(){n.path(t.path)}}angular.module("app").component("actionCard",{bindings:{icon:"@",iconText:"@",bgImage:"@",path:"@"},templateUrl:"action-card.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["$element","$location"]}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e){var n=this;n.$onInit=function(){n.userRole=1}}angular.module("app").component("actionsSection",{bindings:{},templateUrl:"actions-section.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["userService"]}()},function(e,n){"use strict";!function(){angular.module("app").component("dashboard",{bindings:{},template:'<top-nav></top-nav>\n                        <div id="dashboard-section">\n                            <actions-section></actions-section>\n                            <organization-section></organization-section>\n                        </div>'})}()},function(e,n){},,function(e,n){},,function(e,n){"use strict";!function(){function e(e){var n=this;n.$onInit=function(){},n.enterOrg=function(){e.go("order-detail")}}angular.module("app").component("organizationCard",{bindings:{logo:"<",name:"<",address:"<",phone:"<",website:"<"},templateUrl:"organization-card.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["$state"]}()},function(e,n){"use strict";!function(){function e(){return function(e,n){var t=[];return angular.forEach(e,function(e){null!=e.name&&e.name.toLowerCase().indexOf(n.toLowerCase())>=0&&t.push(e)}),t}}angular.module("app").filter("orgFilter",e)}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e){var n=this;n.$onInit=function(){n.orgs=e.getOrganizations(),n.userRole=1}}angular.module("app").component("organizationSection",{bindings:{logo:"@"},templateUrl:"organization-section.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["userService"]}()},function(e,n){"use strict";!function(){function e(e){function n(){o.isActive=!o.isActive,o.inputType=o.isActive?"text":"password"}function t(){e.path("/dashboard")}var o=this;o.togglePassword=n,o.inputType="password",o.isActive=!1,o.signIn=t}angular.module("app").component("login",{bindings:{},templateUrl:"login.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["$location"]}()},function(e,n){},,function(e,n){},,function(e,n){"use strict";!function(){function e(e){function n(e){var n=this;n.hide=function(){e.hide()}}n.$inject=["$mdDialog"];var t=this;t.$onInit=function(){t.user={name:"Veronica Bagwell",phone:"(479) 313-5606",email:"veronica.bagwell@walmart.com",organization:"7 Hills Homeless Center"},t.orderInfo={name:"Subway",foodItems:["Turkey Sandwich","Turkey Sandwich"],time:"12:30pm",address:"2301 W Walnut St",phone:"(479) 636-6699",website:"http://www.subway.com/en-us"}},t.completeOrder=function(){e.show({controller:n,controllerAs:"vm",parent:angular.element(document.body),templateUrl:"order-complete.tpl.html"})}}angular.module("app").component("orderDetail",{bindings:{},templateUrl:"order-detail.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["$mdDialog"]}()},function(e,n){"use strict";!function(){function e(){var e=this;e.$onInit=function(){e.headerFields=[{key:"name",displayName:"Name",sortable:!0},{key:"phone",displayName:"Phone",sortable:!1},{key:"email",displayName:"Email",sortable:!0},{key:"ngo",displayName:"NGO",sortable:!0}],e.items=[{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"},{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"}]}}angular.module("app").component("organizations",{bindings:{},templateUrl:"organizations.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=[]}()},function(e,n){},,function(e,n){},,function(e,n){"use strict";!function(){function e(e){function n(){}var t=this;t.editInfo=n,t.$onInit=function(){t.user=e.getUser()}}angular.module("app").component("profileHeader",{bindings:{},templateUrl:"profile-header.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["userService"]}()},function(e,n){},,function(e,n){"use strict";!function(){function e(){function e(){}function n(){}var t=this;t.viewProfile=e,t.viewOrders=n,t.$onInit=function(){}}angular.module("app").component("profileOrganizationCard",{bindings:{logo:"<",name:"<",address:"<",phone:"<",hours:"<"},templateUrl:"profile-organization-card.tpl.html",controller:e,controllerAs:"vm"})}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e){var n=this;n.$onInit=function(){n.orgs=e.getOrganizations()}}angular.module("app").component("profileOrganizations",{bindings:{},templateUrl:"profile-organizations.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["userService"]}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e){function n(){}var t=this;t.addOrganization=n,t.$onInit=function(){t.user=e.getUser()}}angular.module("app").component("userProfile",{bindings:{},templateUrl:"user-profile.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["userService"]}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e){function n(){e.showPopup()}var t=this;t.originalItemList=t.items.slice(),t.lastSortField=null,t.showEdit=n,t.$onInit=function(){console.log(t)},t.sortDataByField=function(e){e.sortable&&(t.lastSortField===e?t.hasSortedDecesding?(t.items=t.originalItemList.slice(),t.hasSortedDecesding=!1):(t.hasSortedDecesding=!0,t.items.sort(function(n,t){return n[e.key]<t[e.key]?1:n[e.key]>t[e.key]?-1:0})):(t.lastSortField=e,t.hasSortedDecesding=!1,t.items.sort(function(n,t){return n[e.key]<t[e.key]?-1:n[e.key]>t[e.key]?1:0})))}}angular.module("app").component("listTable",{bindings:{headerfields:"<",items:"<"},templateUrl:"list-table.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["viewEditModalService"]}()},function(e,n){},,function(e,n){"use strict";!function(){function e(e,n){function t(){e.show({controller:o,controllerAs:"vm",parent:angular.element(document.body),fullscreen:!1,templateUrl:"view-edit-modal-service.tpl.html"})}function o(e,n){function t(e){return i.selectedOrgs.indexOf(e)>-1}function o(e){if(t(e)){var n=i.selectedOrgs.indexOf(e);i.selectedOrgs.splice(n,1)}else i.selectedOrgs.push(e)}var i=this;i.isSelected=t,i.toggleSelection=o,i.selectedOrgs=[],i.organizations=n.getOrganizations(),i.user=n.getUser(),i.editingUser={firstName:i.user.firstName,lastName:i.user.lastName,mobilePhone:i.user.mobilePhone,email:i.user.email},i.hide=function(){e.hide()}}return o.$inject=["$mdDialog","userService"],{showPopup:t}}angular.module("app").factory("viewEditModalService",["$mdDialog","userService",e])}()},function(e,n){"use strict";!function(){function e(){var e=this;e.$onInit=function(){e.headerFields=[{key:"name",displayName:"Name",sortable:!0},{key:"phone",displayName:"Phone",sortable:!1},{key:"email",displayName:"Email",sortable:!0},{key:"ngo",displayName:"NGO",sortable:!0}],e.items=[{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"},{name:"Veronica Bagwell",phone:"(479) 123-4567",email:"veronica.bagwell@walmart.com",ngo:"The Manna Center"},{name:"Justin Palmer",phone:"(479) 123-4567",email:"justin.palmer@walmart.com",ngo:"Samaritan Community"},{name:"Kayleigh Cooper",phone:"(479) 123-4567",email:"kayleigh.cooper@walmart.com",ngo:"The Manna Center"}]}}angular.module("app").component("volunteers",{bindings:{},templateUrl:"volunteers.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=[]}()},function(e,n){},,function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./topNav/top-nav.style.scss":84,"./topNav/top-nav.tpl.html":29,"./topNav/topNav.component":86,"./topNav/topNav.component.js":86};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=83},function(e,n){},,function(e,n){"use strict";!function(){function e(e,n,t,o){var i=this,a=n[0].querySelector("#toolbar-content");t(e,function(e){angular.element(a).append(e)}),i.$onInit=function(){i.user=o.getUser()}}angular.module("app").component("topNav",{bindings:{},transclude:!0,templateUrl:"top-nav.tpl.html",controller:e,controllerAs:"vm"}),e.$inject=["$scope","$element","$transclude","userService"]}()},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./timeoutService.service.js":88,"./userService.service.js":89};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=87},function(e,n){"use strict";!function(){function e(e){function n(){e.show({controller:t,controllerAs:"vm",parent:angular.element(document.body),template:'\n                        <md-dialog class="small-prompt">\n                            <md-dialog-content>\n                                <div layout="row" layout-wrap>\n                                    <i class="material-icons" flex="100">&#xE425;</i>\n                                    <div class="small-prompt-text" flex="100">Need more time to complete an order?</div>\n                                </div>\n                            </md-dialog-content>\n                            <md-dialog-actions>\n                                <md-button class="button-primary" md-ink-ripple="#D65439" ng-click="vm.exitOrders()">No, Exit Orders</md-button>\n                                <md-button class="md-raised button-primary" ng-click="vm.hide()">Yes</md-button>\n                            </md-dialog-actions>\n                        </md-dialog>'})}function t(e,n){var t=this;t.exitOrders=function(){e.hide(),n.go("dashboard")},t.hide=function(){e.hide()}}return t.$inject=["$mdDialog","$state"],{showPopup:n}}angular.module("app").factory("timeoutService",e),e.$inject=["$mdDialog"]}()},function(e,n){"use strict";!function(){function e(e,n){function t(){return s}function o(){e.get(c+"/users/1").then(i)["catch"](a)}function i(e){var n=e.data;s.firstName=n.firstName,s.lastName=n.lastName,s.mobilePhone=n.mobilePhone,s.email=n.email}function a(e){}function r(){for(var e=0;e<5;e++)l.push({name:"Samaritan Community Center",address:"2510 N 17th St #203Rogers, AR 72756",phone:"(479) 246-0104",website:"http://www.samcc.org",logo:"app/assets/images/scc_logo.jpg"}),l.push({name:"Care Community Center",address:"2510 N 17th St #203Rogers, AR 72756",phone:"(479) 246-0104",website:"http://www.samcc.org",
logo:"app/assets/images/scc_logo.jpg"});return l}var s={firstName:"Veronica",lastName:"Bagwell",mobilePhone:"(479) 313 - 5602",email:"veronica.bagwell@walmart.com"},l=[],c=n.baseUrl;return o(),{getUser:t,setUser:o,getOrganizations:r}}angular.module("app").factory("userService",e),e.$inject=["$http","serviceConstants"]}()},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./filterInput/filterInput.directive.js":91};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=90},function(e,n){"use strict";!function(){function e(e){function n(n,t,o){var i=angular.copy(n.filterInput);t.on("input",function(){n.$apply(function(){o.filterName?n.filterInput=e(o.filterName)(i,t[0].value):n.filterInput=e("filter")(i,t[0].value)})})}return{restrict:"A",scope:{filterInput:"="},link:n}}angular.module("app").directive("filterInput",e),e.$inject=["$filter"]}()},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./topNav/topNav.component.js":86};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=92},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./clients/clients.component.js":32,"./dashboard/actionCard/actionCard.component.js":39,"./dashboard/actionsSection/actionsSection.component.js":42,"./dashboard/dashboard.component.js":43,"./dashboard/organizationCard/organizationCard.component.js":48,"./dashboard/organizationSection/orgFilter.filter.js":49,"./dashboard/organizationSection/organizationSection.component.js":52,"./login/login.component.js":53,"./orderDetail/orderDetail.component.js":58,"./organizations/organizations.component.js":59,"./profile/user/profileHeader/profileHeader.component.js":64,"./profile/user/profileOrganizationCard/profileOrganizationCard.component.js":67,"./profile/user/profileOrganizations/profileOrganizations.component.js":70,"./profile/user/userProfile.component.js":73,"./shared/listTable/listTable.component.js":76,"./viewEditModalService/viewEditModalService.js":79,"./volunteers/volunteers.component.js":80};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=93},function(e,n,t){"use strict";function o(e,n){e.keys().forEach(function(t){null==n?e(t):n.indexOf(t)==-1&&e(t)})}o(t(95)),o(t(108)),o(t(109))},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./_functions.scss":96,"./_includes.scss":98,"./_mixins.scss":100,"./_variables.scss":102,"./base.scss":104,"./main.scss":106};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=95},function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./clients/clients.style.scss":33,"./dashboard/actionCard/action-card.style.scss":37,"./dashboard/actionsSection/actions-section.style.scss":40,"./dashboard/dashboard.style.scss":44,"./dashboard/organizationCard/organization-card.style.scss":46,"./dashboard/organizationSection/organization-section.style.scss":50,"./login/login.style.scss":54,"./orderDetail/order-detail.style.scss":56,"./organizations/organizations.style.scss":60,"./profile/user/profileHeader/profile-header.style.scss":62,"./profile/user/profileOrganizationCard/profile-organization-card.style.scss":65,"./profile/user/profileOrganizations/profile-organizations.style.scss":68,"./profile/user/user-profile.style.scss":71,"./shared/listTable/list-table.style.scss":74,"./viewEditModalService/view-edit-modal-service.style.scss":77,"./volunteers/volunteers.style.scss":81};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=108},function(e,n,t){function o(e){return t(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./topNav/top-nav.style.scss":84};o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=109}]);
//# sourceMappingURL=app.js.map