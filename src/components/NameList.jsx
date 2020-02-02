import React, { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import { getList } from '../action-creator/NameListActions.js';

// transformer
import { transformToUpperCase, transformToUpperCaseSelector } from '../transformers/listTransformer.js';

class NameList extends Component {
    render() {
    const { onGetList, nameList = [] } = this.props;
        return(
            <div>
                <button onClick={onGetList}>Get List</button>
                <ul>
                    {nameList.map((value, index) => (
                        <li key={index}>
                            <p>{value.fname}</p>
                            <p>{value.age}</p>
                        </li>
                    ))}
                 </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //const { nameList = [] } = state.nameList
    return {
    nameList: transformToUpperCaseSelector(state.nameList)
    }
};

const mapDispatchToPros = dispatch => ({
    onGetList: () => dispatch(getList('nameList'))
});

export default connect(mapStateToProps, mapDispatchToPros)(NameList);