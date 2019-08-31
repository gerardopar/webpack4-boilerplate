// importing modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// importing assets
import webpackLogo from '../assets/img/webpack-logo.png';

// importing redux actions
import setTest from '../actions/testAction';

// ! boilerplate test component
class TestPage extends Component {
    handleReduxTest = () => {
        this.props.testAction({ message: 'Redux Is Running!' });
    }

    render() {
        return (
            <div className="test__container">
                <img 
                  onClick={this.handleReduxTest}
                  className="test__img" 
                  src={webpackLogo} 
                  alt="webpack logo" 
                />
                {
                    this.props.test
                        ? <p className="test__text">{this.props.test.message}</p>
                        : null
                }
            </div>
        );
    }
}

// # redux state
const mapStateToProps = state => ({
        test: state.test
    });

// # redux actions
const mapDispatchToProps = dispatch => ({
    testAction: msg => dispatch(setTest(msg))
});

TestPage.propTypes = {
    testAction: PropTypes.func,
    test: PropTypes.objectOf(PropTypes.string)
};

TestPage.defaultProps = {
    testAction: () => {},
    test: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
