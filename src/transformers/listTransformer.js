import { createSelector } from 'reselect';

export const transformToUpperCase = (list) => {
    return list.map((val, index) => {
        console.log(index)
        return { fname: val.fname.toUpperCase(), age: val.age }
    })
}

const getNameList = state => state.nameList || []

export const transformToUpperCaseSelector = createSelector(
    [getNameList],
    (nameList) => {
        return nameList.map((val, index) => {
            console.log(index)
            return { fname: val.fname.toUpperCase(), age: val.age }
        })
    }
)
