let definition = 
                {"states":[{"fields":[{"name":"['ContactName']","label":"Name","displayLabel":"['ContactName']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['ContactEmail']","label":"Email","displayLabel":"['ContactEmail']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['ContactPhone']","label":"Phone","displayLabel":"['ContactPhone']","type":"phone","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false}],"conditions":{"group":[{"field":"$scope.data.status","operator":"===","value":"'active'","type":"system"}]},"definedActions":{"actions":[{"type":"Vlocity Action","id":"sample Update Contact","displayName":"Update Contact","iconName":"action:edit_groups","collapse":true,"isCustomAction":false,"hasExtraParams":false}]},"name":"Active","lwc":{"MasterLabel":"cardMiniActive","DeveloperName":"cardMiniActive","Id":"0Rb4x000001tp3gSAM","name":"cardMiniActive"},"isSmartAction":false,"smartAction":{},"sObjectType":"Contact","actionCtxId":"['ContactId']"}],"filter":{},"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"sample_getMasterAccountDetails","optionsMap":{"vlcClass":"vlocity_cmt.IntegrationProcedureService"},"inputMap":{"AccountId":"{{params.id}}"},"resultVar":"['Contact']"},"contextVariables":[{"name":"params.id","val":"0014x00001JRZGaQAS"}]},"title":"Contact Details","enableLwc":true,"sessionVars":[{"name":"leftIcon","val":"standard:contact"}],"GlobalKey__c":"sample Contact Details/vlocityDev/1/1594257616503"}; 
            export default definition