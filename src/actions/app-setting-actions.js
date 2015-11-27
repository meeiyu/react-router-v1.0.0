import AppDispatcher from '../dispatcher/app-dispatcher';
import Constants from '../constants/constants';
import API from '../services/api';
import utilDispatcher from './util-dispatcher';

let AppSettingActions = {
    getAppConfig() {
        API.getConfig().then((res) => {
                API.init(res);
                AppDispatcher.apiHandleAction({
                    actionType: Constants.APP_SETTING_SET_CONFIG,
                    data      : res
                });
        }, utilDispatcher.servicesError);
    }
};

export default AppSettingActions;
