import React from 'react';
import BaseComponent from 'components/base-component';
//actions
import AppSettingActions from 'actions/app-setting-actions';
//stores
import AppSettingStore from 'stores/app-setting-store';

let actionsMaps = {
    getAppConfig: AppSettingActions.getAppConfig
};

let getAppSettingStore = () => {
    return {
        setting: AppSettingStore.getSetting()
    };
};

class Root extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = getAppSettingStore();
        this._bind(
            '_storeChange',
            '_renderRouter'
        );
    }
    componentDidMount() {
        AppSettingStore.addChangeListener(this._storeChange);
        actionsMaps.getAppConfig();
    }
    componentWillUnmount() {
        AppSettingStore.removeChangeListener(this._storeChange);
    }
    _storeChange() {
        this.setState(getAppSettingStore());
    }
    _renderRouter() {
        const {config} = this.state.setting;
        let route;
        if (Object.keys(config).length){
            route = this.props.children;
        }
        return (route);
    }
    render() {
        let route = this._renderRouter();
        return (
            <div className="app-wrapper">
                {route}
            </div>
        );
    }
}

export default Root;
