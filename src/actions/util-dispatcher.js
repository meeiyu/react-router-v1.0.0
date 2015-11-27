import AppDispatcher from 'dispatcher/app-dispatcher';
import Constants from 'constants/constants';

let utilDispatcher = {
    servicesError(res) {
        AppDispatcher.apiHandleAction({
            actionType: Constants.SERVICES_ERROR,
            data      : res
        });
    }
};

export default utilDispatcher;
