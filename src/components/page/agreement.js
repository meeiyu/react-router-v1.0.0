import React from 'react';
import BaseComponent from 'components/base-component';

class Agreement extends BaseComponent {
	constructor(props) {
        super(props);
        this._bind(
            '_click'
        );
    }
    componentDidMount() {
        this.router = this.context.router;
    }
    _click() {
    	console.log('123');
    	this.router.transitionTo('/tags');
    }
    render() {
        return (
            <div onClick={this._click}>
                Agreement!!
            </div>
        );
    }
}

Agreement.contextTypes = {
    router: React.PropTypes.func
};

export default Agreement;
