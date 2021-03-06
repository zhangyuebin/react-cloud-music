import * as actionTypes from "./constants";
import { fromJS } from "immutable";//把JS数据结构转化 immutable 数据结构

const defaultState = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading:true
});

//因为使用的是immutable数据结构，所以使用get和set来获取数据和设置状态
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return state.set('bannerList', action.data);
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return state.set('enterLoading',action.data)    
        default:
            return state;
    }
}