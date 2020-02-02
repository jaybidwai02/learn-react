import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

// Actions
import { increment, onReset, onPush } from '../action-creator/NameListActions.js';

function Counter(props) {
    const { onInc, count, onReset, onPush, temp, len, childPropsInc } = props;
    return(
        <div>
            <button onClick={() => onInc()}>Inc</button>
            <button onClick={() => onReset() }>Reset</button>
            <button onClick={() => onPush(2) }>Push</button>
            <p>childPropsInc {childPropsInc}</p>
            <p>{count}</p>
            <p>Push array length {temp.length}</p>
            <p>Push array len {len}</p>
        </div>
    )
}

export default connect((state) => {
    const { count } = state.nameList
    return { c: count }
},
{ onInc: increment, onReset, onPush }
/*(dispatch) => bindActionCreators(
    { onInc: increment, onReset, onPush },
    dispatch
)*/
)(Counter);