import AppDispatcher from 'dispatcher/app-dispatcher';
import Constants from 'constants/constants';
import UtilsStore from './utils-store.js';

let setting = {
    config  : {}
};
class AppSettingStore extends UtilsStore {
    constructor() {
        super();
    }
    //set
    setSetting(data) {
        setting.config = data.config;
    }
    setConfig(data) {
        setting.config = data;
    }
    //get
    getSetting() {
        return setting;
    }
    getConfig() {
        return setting.config;
    }
}

let _AppSettingStore = new AppSettingStore();

_AppSettingStore.dispatchToken = AppDispatcher.register((payload) => {
    let action = payload.action,
        type   = '';
    switch (action.actionType) {
        case Constants.APP_SETTING:
            _AppSettingStore.setSetting(action.data);
        break;
        case Constants.APP_SETTING_SET_CONFIG:
            _AppSettingStore.setConfig(action.data);
        break;
        default:
           return true;
    }
    _AppSettingStore.emitChange(type);
    return true;
});

export default _AppSettingStore;
