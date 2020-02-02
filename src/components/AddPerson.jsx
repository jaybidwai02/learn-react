import React from 'react';
import { connect } from 'react-redux';

import { onAdd } from '../action-creator/NameListActions.js';

function AddPerson({ onAdd, totalPersons }) {
    return(
        <div>
            <button onClick={() => onAdd(3)}>Add</button>
            <p>totalPersons {totalPersons}</p>
        </div>
    )
}

export default connect(
    (state) => {
        return { totalPersons: state.nameList.totalPersons }
    },
    { onAdd },
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps, ...dispatchProps, ...ownProps
    }),
    {
        pure: true,
        areStatesEqual: (nextState, prevState) => nextState.nameList.totalPersons === prevState.nameList.totalPersons
    }
)(AddPerson);
