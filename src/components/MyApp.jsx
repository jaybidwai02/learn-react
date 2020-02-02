import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component
import NameList from './NameList.jsx'
import Counter from './Counter.jsx'
import AddPerson from './AddPerson.jsx'

class MyAppContainer extends Component {
    constructor(props) {
    super(props);
        this.state = {
            childPropsInc: 0
        }
    }
    changeChildProps = () => {
        this.setState({
            childPropsInc: this.state.childPropsInc + 1
        })
    }
    render() {
    const { msg, count, temp, len } = this.props;
    const { childPropsInc } = this.state;
        return(
            <div>
                <p>{msg}</p>
                <button onClick={this.changeChildProps}>Change</button>
                <Counter count={count} temp={temp} len={len} now={Date.now()} childPropsInc={childPropsInc}/>
                <NameList index={count} childPropsInc={childPropsInc}/>
                <AddPerson />
            </div>
        )
    }
}

const MyApp = connect((state => {
    const { count, temp = [] } = state.MyApp;
    return {
        msg: state.MyApp.msg,
        count,
        temp,
        len: temp.length
    }
}), {}, (stateProps, dispatchProps, ownProps) => ({
    ...stateProps, ...dispatchProps, ...ownProps
}), {
    areStatesEqual: (nxt, prev) => nxt.MyApp === prev.MyApp
})(MyAppContainer)
export default MyApp;
