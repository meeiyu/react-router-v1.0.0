let API = {
    // 模組預設參數
    settings: {
        configUrl : 'config/config.json'
    },
    // 外部設定參數
    options: {
        url: ''
    },
    // 初始化 Api
    init(config) {
        this.options.url = config.url;
    },
    //  common ajax req methon
    ajaxStarter(options) {
        let ajaxOption;

        ajaxOption = {
            url     : options.url,
            type    : options.type,
            dataType: 'json',
            cache   : false
        };

        if (options.data !== null) {
            ajaxOption.data = options.data;
        }

        // 使用 body 傳送的設定。
        if (options.isBody && options.data !== ''){
            ajaxOption.processData = false;
            ajaxOption.contentType = 'application/json';
            ajaxOption.data        = JSON.stringify(options.data);
            //console.log('ajaxOption.data', ajaxOption.data);
        }

        return $.ajax(ajaxOption);
    },
    // App setting
    getConfig() {
        let promise = $.ajax({
            url     : this.settings.configUrl,
            type    : 'GET',
            dataType: 'json'
        });
        return promise;
    }
};

module.exports = API;
