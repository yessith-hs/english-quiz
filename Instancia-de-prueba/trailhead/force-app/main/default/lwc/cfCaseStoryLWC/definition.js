let definition = 
                {"GlobalKey__c":"Case Story LWC/Vlocity/2/1580726018293","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"Case"},"sessionVars":[],"states":[{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Case Type","name":"['highlight']","type":"string"},{"collapse":true,"displayLabel":"['ownerValueMap']['Owner']","editing":false,"group":"Custom Properties","label":"owner","name":"['ownerValueMap']['Owner']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"data":"","lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb4x000001tpENCAY","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0Rb4x000001tpELCAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Case onGoing","sObjectType":"Case","templateUrl":"story-card"},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Status","name":"['subtitle']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb4x000001tpEKCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb4x000001tpEMCAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Case","sObjectType":"Case","templateUrl":"story-card"}],"title":"Cases"}; 
            export default definition