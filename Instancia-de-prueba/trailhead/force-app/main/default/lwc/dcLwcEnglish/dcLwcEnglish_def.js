export const OMNIDEF = {"userTimeZone":-480,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"0054x0000058tm9QA2","userCurrencyCode":"USD","timeStamp":"2021-02-25T19:02:41.336Z","sOmniScriptId":"a294x0000003VekAAE","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"stepChartPlacement":"top","stylesheet":{"lightningRtl":"","lightning":"","newportRtl":"","newport":""},"disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":false,"timeTracking":false,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}]},"prefillJSON":"{}","lwcId":"81404675-88f9-658c-289f-0997931b5fdc","labelMap":{"dcShoppingCart":"ShoppingCart:dcShoppingCart","dcOfferConfig":"ConfigOffer:dcOfferConfig","dcOffersList":"SelectOffer:dcOffersList","dcChildCatalog":"SelectOffer:dcChildCatalog","dcCatalog":"SelectOffer:dcCatalog","FetchAccountDetails":"FetchAccountDetails","setValues":"setValues","UpdateBillingAddress":"UpdateBillingAddress","updateAddressVIP":"updateAddressVIP","Payment":"Payment","ReviewOrder":"ReviewOrder","saveCartVIP":"saveCartVIP","SubmitOrderVIP":"SubmitOrderVIP","orderSummary":"orderSummary","dcUpdateBillingAddressLWC":"UpdateBillingAddress:dcUpdateBillingAddressLWC","BraintreepaymentLWC":"Payment:BraintreepaymentLWC","ReviewOrderLWC":"ReviewOrder:ReviewOrderLWC","termsConditions":"ReviewOrder:termsConditions","summary":"orderSummary:summary","TextBlock1":"orderSummary:TextBlock1","ShoppingCart":"ShoppingCart","ConfigOffer":"ConfigOffer","SelectOffer":"SelectOffer","GetAccountDetails":"GetAccountDetails","initialiseValues":"initialiseValues"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Set Values","propSetMap":{"disOnTplt":false,"label":"initialiseValues","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"elementValueMap":{"brainTreePaymentUrl":"https://vlocity-dc-braintree-checkout.herokuapp.com","catalogCode":"mobile"},"controlWidth":12,"aggElements":{}},"offSet":0,"name":"initialiseValues","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"initialiseValues","lwcId":"lwc0"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"GetAccountDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"AccountId":"%ContextId%","AccountRecordType":"Consumer","AccountStatus":"Active","AccountName":"%userName%","AccountEmail":"%userName%"},"responseJSONNode":"accountDetails","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"dc_createAccount","controlWidth":12,"aggElements":{}},"offSet":0,"name":"GetAccountDetails","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"GetAccountDetails","lwcId":"lwc1"},{"type":"Step","propSetMap":{"disOnTplt":false,"message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Step 1 : Select Offer","chartLabel":"Step 1 : Select Offer","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":0,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":false,"uiElements":{"SelectOffer":""},"aggElements":{"dcCatalog":"","dcChildCatalog":"","dcOffersList":""}},"offSet":0,"name":"SelectOffer","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"label":"dcCatalog","disOnTplt":false,"customAttributes":[{"source":"%catalogCode%","name":"catalog-code"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcCatalog","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcCatalog","level":1,"JSONPath":"SelectOffer:dcCatalog","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"label":"dcChildCatalog","disOnTplt":false,"customAttributes":[{"source":"%SelectOffer:dcCatalog:parentCatalogCode%","name":"parent-catalog-code"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcChildCatalogs","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcChildCatalog","level":1,"JSONPath":"SelectOffer:dcChildCatalog","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"label":"dcOffersList","disOnTplt":false,"customAttributes":[{"source":"%SelectOffer:dcChildCatalog:catalogCode%","name":"catalog-code"},{"source":"3","name":"page-size"},{"source":"%context%","name":"context"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcOffersList","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcOffersList","level":1,"JSONPath":"SelectOffer:dcOffersList","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent3":true,"lwcId":"lwc22-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"SelectOffer","lwcId":"lwc2"},{"type":"Step","propSetMap":{"disOnTplt":false,"message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Step 2 : Config Offer","chartLabel":"Step 2 : Config Offer","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":0,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":false,"uiElements":{"ConfigOffer":""},"aggElements":{"dcOfferConfig":""}},"offSet":0,"name":"ConfigOffer","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"label":"dcOfferConfig","disOnTplt":false,"customAttributes":[{"source":"%SelectOffer:dcChildCatalog:catalogCode%","name":"catalog-code"},{"source":"%SelectOffer:dcOffersList:offerCode%","name":"offer-code"},{"source":"%apiUrl%","name":"api-url"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcOfferConfig","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcOfferConfig","level":1,"JSONPath":"ConfigOffer:dcOfferConfig","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent4":true,"lwcId":"lwc30-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ConfigOffer","lwcId":"lwc3"},{"type":"Step","propSetMap":{"disOnTplt":false,"message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Step 3 : Shopping Cart","chartLabel":"Step 3 : Shopping Cart","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":0,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":false,"uiElements":{"ShoppingCart":""},"aggElements":{"dcShoppingCart":""}},"offSet":0,"name":"ShoppingCart","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":4,"response":null,"propSetMap":{"label":"dcShoppingCart","disOnTplt":false,"customAttributes":[{"source":"%SelectOffer:dcChildCatalog:catalogCode%","name":"catalog-code"},{"source":"%ConfigOffer:dcOfferConfig:cartContextKey%","name":"cart-context-key"},{"source":"false","name":"is-community"},{"source":"%apiUrl%","name":"api-url"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcShoppingCart","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcShoppingCart","level":1,"JSONPath":"ShoppingCart:dcShoppingCart","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent5":true,"lwcId":"lwc40-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ShoppingCart","lwcId":"lwc4"},{"inheritShowProp":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":5,"level":0,"name":"FetchAccountDetails","offSet":5,"propSetMap":{"controlWidth":12,"integrationProcedureKey":"dc_createAccount","useContinuation":false,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","useFuture":false,"chainable":false},"remoteTimeout":30000,"preTransformBundle":"","postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"accountInfo","extraPayload":{"AccountStatus":"Active","AccountRecordType":"Consumer"},"inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Step","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[false,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"svgSprite":"","svgIcon":"","label":"FetchAccountDetails","errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"aggElements":{}},"type":"Integration Procedure Action","bIntegrationProcedureAction":true,"JSONPath":"FetchAccountDetails","lwcId":"lwc5"},{"inheritShowProp":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":6,"level":0,"name":"setValues","offSet":5,"propSetMap":{"controlWidth":12,"elementValueMap":{"userName":"%accountInfo:Phone%"},"showPersistentComponent":[false,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"label":null,"disOnTplt":false,"aggElements":{}},"type":"Set Values","bSetValues":true,"JSONPath":"setValues","lwcId":"lwc6"},{"bAccordionActive":false,"bAccordionOpen":false,"children":[{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":0,"JSONPath":"UpdateBillingAddress:dcUpdateBillingAddressLWC","level":1,"name":"dcUpdateBillingAddressLWC","propSetMap":{"controlWidth":12,"show":null,"conditionType":"Hide if False","hide":false,"lwcName":"vlocity_cmt__dcUpdateBillingAddress","bStandalone":false,"customAttributes":[],"label":null,"disOnTplt":false},"response":null,"rootIndex":2,"type":"Custom Lightning Web Component","bcustomlightningwebcomponent6":true,"lwcId":"lwc70-0"}],"indexInParent":0,"level":1,"response":null}],"inheritShowProp":null,"response":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":7,"level":0,"name":"UpdateBillingAddress","offSet":5,"propSetMap":{"validationRequired":true,"previousLabel":"Previous","previousWidth":0,"nextLabel":"Next","nextWidth":3,"cancelLabel":"Cancel","cancelMessage":"Are you sure?","saveLabel":"Save for later","saveMessage":"Are you sure you want to save it for later?","completeLabel":"Complete","completeMessage":"Are you sure you want to complete the script?","instruction":"","showPersistentComponent":[false,false],"remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{},"knowledgeOptions":{"language":"English","publishStatus":"Online","keyword":"","dataCategoryCriteria":"","remoteTimeout":30000,"typeFilter":""},"show":null,"conditionType":"Hide if False","HTMLTemplateId":"","instructionKey":"","chartLabel":"Step 4: Update Addresses","label":"Step 4: Update Addresses","allowSaveForLater":false,"errorMessage":{"custom":[],"default":null},"disOnTplt":false,"uiElements":{"UpdateBillingAddress":""},"aggElements":{"dcUpdateBillingAddressLWC":""}},"type":"Step","bStep":true,"isStep":true,"JSONPath":"UpdateBillingAddress","lwcId":"lwc7"},{"inheritShowProp":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":8,"level":0,"name":"updateAddressVIP","offSet":5,"propSetMap":{"controlWidth":12,"integrationProcedureKey":"dc_updateBillingDetails","useContinuation":false,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","useFuture":false,"chainable":false},"remoteTimeout":30000,"preTransformBundle":"","postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","extraPayload":{"AccountId":"%accountInfo:AccountId%","BillingCity":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:city%","BillingState":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:state%","BillingAddress":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:address%","BillingZipCode":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:zip%","ShippingCity":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:city%","ShippingState":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:state%","ShippingAddress":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:address%","ShippingZipCode":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:zip%"},"inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Step","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[false,false],"show":{"group":{"operator":"AND","rules":[{"condition":"<>","field":"ShoppingCart:dcShoppingCart:saveCart","data":"yes"}]}},"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"svgSprite":"","svgIcon":"","label":"updateAddressVIP","errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"aggElements":{}},"type":"Integration Procedure Action","bIntegrationProcedureAction":true,"JSONPath":"updateAddressVIP","lwcId":"lwc8"},{"bAccordionActive":false,"bAccordionOpen":false,"children":[{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":0,"JSONPath":"Payment:BraintreepaymentLWC","level":1,"name":"BraintreepaymentLWC","propSetMap":{"controlWidth":12,"show":null,"conditionType":"Hide if False","hide":false,"lwcName":"vlocity_cmt__dcCheckoutPayment","bStandalone":false,"customAttributes":[{"name":"checkout-payment-url","source":"%brainTreePaymentUrl%"},{"name":"total","source":"%ShoppingCart:dcShoppingCart:dueToday%"}],"label":null,"disOnTplt":false},"response":null,"rootIndex":4,"type":"Custom Lightning Web Component","bcustomlightningwebcomponent7":true,"lwcId":"lwc90-0"}],"indexInParent":0,"level":1,"response":null}],"inheritShowProp":null,"response":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":9,"level":0,"name":"Payment","offSet":5,"propSetMap":{"validationRequired":true,"previousLabel":"Previous","previousWidth":0,"nextLabel":"Next","nextWidth":0,"cancelLabel":"Cancel","cancelMessage":"Are you sure?","saveLabel":"Save for later","saveMessage":"Are you sure you want to save it for later?","completeLabel":"Complete","completeMessage":"Are you sure you want to complete the script?","instruction":"","showPersistentComponent":[false,false],"remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{},"knowledgeOptions":{"language":"English","publishStatus":"Online","keyword":"","dataCategoryCriteria":"","remoteTimeout":30000,"typeFilter":""},"show":null,"conditionType":"Hide if False","HTMLTemplateId":"","instructionKey":"","chartLabel":"Step 5: Enter Payment Information","label":"Step 5: Enter Payment Information","allowSaveForLater":false,"errorMessage":{"custom":[],"default":null},"disOnTplt":false,"uiElements":{"Payment":""},"aggElements":{"BraintreepaymentLWC":""}},"type":"Step","bStep":true,"isStep":true,"JSONPath":"Payment","lwcId":"lwc9"},{"bAccordionActive":false,"bAccordionOpen":false,"children":[{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":0,"JSONPath":"ReviewOrder:ReviewOrderLWC","level":1,"name":"ReviewOrderLWC","propSetMap":{"controlWidth":12,"show":{"group":{"operator":"AND","rules":[{"condition":"<>","field":"ShoppingCart:dcShoppingCart:saveCart","data":"yes"}]}},"conditionType":"Hide if False","hide":false,"lwcName":"vlocity_cmt__dcReviewOrder","bStandalone":false,"customAttributes":[{"name":"user-info","source":"%accountInfo%"},{"name":"billing-address","source":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing%"},{"name":"shipping-address","source":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping%"},{"name":"transaction-details","source":"%Payment:BraintreepaymentLWC:transactionDetails%"}],"label":null,"disOnTplt":false},"response":null,"rootIndex":5,"type":"Custom Lightning Web Component","bcustomlightningwebcomponent8":true,"lwcId":"lwc100-0"}],"indexInParent":0,"level":1,"response":null},{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":1,"JSONPath":"ReviewOrder:termsConditions","level":1,"name":"termsConditions","propSetMap":{"controlWidth":12,"repeat":false,"repeatClone":false,"repeatLimit":null,"readOnly":false,"defaultValue":true,"help":false,"helpText":"","checkLabel":"By checking this box I agree to Vlocity's Terms and Conditions and Privacy Statement.","show":null,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":"","hide":false,"disOnTplt":false,"label":null},"response":null,"rootIndex":5,"type":"Checkbox","bCheckbox":true,"lwcId":"lwc101-0"}],"indexInParent":1,"level":1,"response":null}],"inheritShowProp":null,"response":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":10,"level":0,"name":"ReviewOrder","offSet":5,"propSetMap":{"validationRequired":false,"previousLabel":"Previous","previousWidth":0,"nextLabel":"Next","nextWidth":3,"cancelLabel":"Cancel","cancelMessage":"Are you sure?","saveLabel":"Save for later","saveMessage":"Are you sure you want to save it for later?","completeLabel":"Complete","completeMessage":"Are you sure you want to complete the script?","instruction":"","showPersistentComponent":[false,false],"remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{},"knowledgeOptions":{"language":"English","publishStatus":"Online","keyword":"","dataCategoryCriteria":"","remoteTimeout":30000,"typeFilter":""},"show":{"group":{"operator":"AND","rules":[{"condition":"<>","field":"ShoppingCart:dcShoppingCart:saveCart","data":"yes"}]}},"conditionType":"Hide if False","HTMLTemplateId":"","instructionKey":"","chartLabel":"Step 6: Review Order","label":"Step 6: Review Order","allowSaveForLater":false,"errorMessage":{"custom":[],"default":null},"wpm":false,"ssm":false,"pubsub":false,"message":{},"disOnTplt":false,"uiElements":{"ReviewOrder":"","termsConditions":""},"aggElements":{"ReviewOrderLWC":""}},"type":"Step","bStep":true,"isStep":true,"JSONPath":"ReviewOrder","lwcId":"lwc10"},{"inheritShowProp":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":11,"level":0,"name":"saveCartVIP","offSet":5,"propSetMap":{"controlWidth":12,"integrationProcedureKey":"dc_CreateOrder","useContinuation":false,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","useFuture":false,"chainable":false},"remoteTimeout":30000,"preTransformBundle":"","postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","extraPayload":{"catalogCode":"%SelectOffer:dcChildCatalog:catalogCode%","accountId":"%accountInfo:AccountId%","cartContextKey":"%ShoppingCart:dcShoppingCart:cartContextKey%"},"inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Step","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[false,false],"show":{"group":{"operator":"AND","rules":[{"condition":"=","field":"ShoppingCart:dcShoppingCart:saveCart","data":"yes"}]}},"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"svgSprite":"","svgIcon":"","label":null,"errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"aggElements":{}},"type":"Integration Procedure Action","bIntegrationProcedureAction":true,"JSONPath":"saveCartVIP","lwcId":"lwc11"},{"inheritShowProp":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":12,"level":0,"name":"SubmitOrderVIP","offSet":5,"propSetMap":{"controlWidth":12,"integrationProcedureKey":"dc_SubmitOrder","useContinuation":false,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","useFuture":false,"chainable":false},"remoteTimeout":30000,"preTransformBundle":"","postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","extraPayload":{"catalogCode":"%SelectOffer:dcChildCatalog:catalogCode%","accountId":"%accountInfo:AccountId%","cartContextKey":"%ShoppingCart:dcShoppingCart:cartContextKey%"},"inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Step","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[false,false],"show":{"group":{"operator":"AND","rules":[{"condition":"<>","field":"ShoppingCart:dcShoppingCart:saveCart","data":"yes"}]}},"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"svgSprite":"","svgIcon":"","label":"SubmitOrderVIP","errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"aggElements":{}},"type":"Integration Procedure Action","bIntegrationProcedureAction":true,"JSONPath":"SubmitOrderVIP","lwcId":"lwc12"},{"bAccordionActive":false,"bAccordionOpen":false,"children":[{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":0,"JSONPath":"orderSummary:summary","level":1,"name":"summary","propSetMap":{"controlWidth":12,"text":"<blockquote>\n<h1><strong><span style=\"color: #000080; font-size: 20px;\">Order <code style=\"color: pink;\">%orderId%</code> submitted successully.</span></strong></h1>\n</blockquote>","show":{"group":{"operator":"AND","rules":[{"data":"yes","condition":"<>","field":"ShoppingCart:dcShoppingCart:saveCart"}]}},"dataJSON":false,"HTMLTemplateId":"","textKey":"","label":"summary","sanitize":false,"disOnTplt":false},"response":null,"rootIndex":8,"type":"Text Block","bTextBlock":true,"lwcId":"lwc130-0"}],"indexInParent":0,"level":1,"response":null},{"bHasAttachment":false,"eleArray":[{"bHasAttachment":false,"children":[],"index":0,"indexInParent":1,"JSONPath":"orderSummary:TextBlock1","level":1,"name":"TextBlock1","propSetMap":{"disOnTplt":false,"sanitize":false,"label":"summary","textKey":"","HTMLTemplateId":"","dataJSON":false,"show":{"group":{"operator":"AND","rules":[{"data":"yes","condition":"=","field":"ShoppingCart:dcShoppingCart:saveCart"}]}},"text":"<blockquote>\n<h1><strong><span style=\"color: #000080; font-size: 20px;\">Order <code style=\"color: pink;\">%orderId%</code> created and saved successully.</span></strong></h1>\n</blockquote>","controlWidth":12},"response":null,"rootIndex":8,"type":"Text Block","bTextBlock":true,"lwcId":"lwc131-0"}],"indexInParent":1,"level":1,"response":null}],"inheritShowProp":null,"response":null,"bEmbed":true,"bHasAttachment":false,"indexInParent":13,"level":0,"name":"orderSummary","offSet":5,"propSetMap":{"validationRequired":true,"previousLabel":"Previous","previousWidth":0,"nextLabel":"Next","nextWidth":"3","cancelLabel":"Cancel","cancelMessage":"Are you sure?","saveLabel":"Save for later","saveMessage":"Are you sure you want to save it for later?","completeLabel":"Complete","completeMessage":"Are you sure you want to complete the script?","instruction":"<h1>&nbsp;</h1>","showPersistentComponent":[false,false],"remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{},"knowledgeOptions":{"language":"English","publishStatus":"Online","keyword":"","dataCategoryCriteria":"","remoteTimeout":30000,"typeFilter":""},"show":null,"conditionType":"Hide if False","HTMLTemplateId":"","instructionKey":"","chartLabel":"Step 7: Order Submitted","label":"Step 7: Order Submitted","allowSaveForLater":false,"errorMessage":{"custom":[],"default":null},"disOnTplt":false,"uiElements":{"orderSummary":""},"aggElements":{}},"type":"Step","bStep":true,"isStep":true,"JSONPath":"orderSummary","lwcId":"lwc13"}],"bReusable":false,"bpVersion":2,"bpType":"dc","bpSubType":"lwc","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"catalogCode":null,"SelectOffer":{"dcCatalog":{"parentCatalogCode":null},"dcChildCatalog":{"catalogCode":null},"dcOffersList":{"offerCode":null}},"context":null,"apiUrl":null,"ConfigOffer":{"dcOfferConfig":{"cartContextKey":null}},"brainTreePaymentUrl":null,"ShoppingCart":{"dcShoppingCart":{"dueToday":null}},"accountInfo":null,"UpdateBillingAddress":{"dcUpdateBillingAddressLWC":{"billing":null,"shipping":null}},"Payment":{"BraintreepaymentLWC":{"transactionDetails":null}}}};