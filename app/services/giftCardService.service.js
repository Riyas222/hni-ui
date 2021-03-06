(function() {
    angular
        .module('app')
        .factory('giftCardService', giftCardService);

    giftCardService.$inject = ['$http','serviceConstants'];

    function giftCardService($http,serviceConstants) {
    	let baseUrl = serviceConstants.baseUrl;
        return {
        	getProviderGiftCards,
        	saveNewGiftCard,
        	deactivateGiftCard,
        	activateGiftCard,
        	updateGiftCards,
        	getGiftCard,
        	rechargeGiftCard
        };

        function getProviderGiftCards(providerId) {
        	return $http.get(`${baseUrl}/giftCards/${providerId}/provider/`);
        }    
        
        function saveNewGiftCard(giftCard){
        	return $http.post(`${baseUrl}/giftCards/save/`, giftCard);
        }
        function deactivateGiftCard(giftCardId){
        	return $http.put(`${baseUrl}/giftCards/deactivate/`, giftCardId);
        }
        function activateGiftCard(giftCardId){
        	return $http.put(`${baseUrl}/giftCards/activate/`, giftCardId);
        }
        function updateGiftCards(giftCards){
        	return $http.put(`${baseUrl}/giftCards/cards/update`,giftCards);
        }
        function getGiftCard(giftCardId){
        	return $http.get(`${baseUrl}/giftCards/getCard/${giftCardId}`);
        } 
        
        function rechargeGiftCard(giftCard){
        	return $http.put(`${baseUrl}/giftCards/${giftCard.id}/recharge/${giftCard.amount}`);
        }
    }
})();