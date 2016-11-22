(function() {
    angular
        .module('app')
        .component('workspaceBase', {
            bindings: {},
            templateUrl: 'workspace-base.tpl.html',
            controller: controller,
            controllerAs: 'vm'
        });

    controller.$inject = ['$element', '$timeout', 'selectedNavItemService', 'authService', 'rolesConstant'];

    function controller($element, $timeout, selectedNavItemService, authService, rolesConstant) {
        let vm = this;

        let navHeight = 0;
        let collapsedNav = null;

        vm.role = authService.getRole();
        vm.selectedNavItem = selectedNavItemService.getSelectedItem();
        vm.rolesConstant = rolesConstant;
        vm.toggleCollapsedNav = toggleCollapsedNav;

        vm.resolveValues = {
            role: vm.role,
            rolesConstant: vm.rolesConstant,
            selectedNavItem: vm.selectedNavItem,
            toggleCollapsedNav: vm.toggleCollapsedNav
        };

        $timeout(() => {
            collapsedNav = $element[0].querySelector('.collapsed-nav-menu');
            navHeight = $element[0].querySelector('#top-nav').clientHeight;

            if(collapsedNav) {
                collapsedNav.style.top = navHeight + 'px';
            }
        }, 200);

        function toggleCollapsedNav() {
            if(collapsedNav) {
                angular.element(collapsedNav).toggleClass('collapsed-nav-menu-shown');
            }
        }
    }
})();