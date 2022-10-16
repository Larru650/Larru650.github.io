import { registerBespokeExpressionParser } from '@avantia/form-validation';
import { addToWindowRef, convertTokensInTemplate, HpDebugFlags, logInfo } from '@avantia/questionset-model';
import jQuery from 'jquery';
import lodash from 'lodash';
import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getAddressItemAction } from './actions/getAddressItemAction';
import { searchForAddresses } from './actions/getAddressLookupAction';
import './assets/style/site.scss';
import App from './components/app';
import { tokenPrefix, tokenSuffix } from './components/templateResolver';
import { getConfig } from './config/configuration';
import { configureThirdPartyFeatures } from './config/configureThirdPartyFeatures';
import { configureFeatures } from './configureFeatures';
import { registerCustomFunctions } from './customFunctionRegistry';
import * as customFunctions from './customFunctions';
import { homeProtectHomepageTools } from './homeProtectHomepageTools';
import { addressLookupButtonClickAction, registerAddressLookupFeature } from './reducers/addressLookupFeatureReducer';
import { isValidControlType } from './reducers/isValidControlType';
import { registerCustomHashAndAnswersHandler } from './reducers/questionSetPayloadMapper';
import { registerIsValidControlTypeFunction } from './reducers/questionSetReducerLibrary';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store/configureStore';

const config = getConfig();

registerCustomFunctions('*', customFunctions);

registerBespokeExpressionParser((block: string) => {
  if (block.indexOf(tokenPrefix) >= 0 && block.indexOf(tokenSuffix) > 0) {
    const code = convertTokensInTemplate(block);
    logInfo(`Validator expression: [${block}] => [${code}]`, HpDebugFlags.ValidatorExpressions);
    return `return ${code};`;
  }

  return block;
});

registerCustomHashAndAnswersHandler(homeProtectHomepageTools);

registerIsValidControlTypeFunction(isValidControlType);

configureFeatures([
  {
    key: 'address-lookup',
    createActionPromise: searchForAddresses,
    buttonClickAction: addressLookupButtonClickAction,
    registerFeature: registerAddressLookupFeature
  },
  {
    key: 'address-select',
    createActionPromise: getAddressItemAction,
    buttonClickAction: undefined,
    registerFeature: undefined
  }
]);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

configureThirdPartyFeatures(config);

addToWindowRef({ $: jQuery, jQuery, lodash }); // GTM needs jQuery and it helps when debugging.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
