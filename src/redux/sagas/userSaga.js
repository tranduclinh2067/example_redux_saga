import {call, put, takeEvery} from 'redux-saga/effects';
import productAPI from '../../api/productAPI';

// 22.30
const getAPI = async () => {
    try {
        const res = await productAPI.getAll();
        console.log(res);
        return res;
    }
    catch(err) {
        console.log(err);
    }
}  

function* fetchUsers() {
    try {
        const users = yield call(getAPI);
        yield put({type: 'GET_USERS_SUCCESS', users: users})
    } catch (e) {
        yield put ({type: 'GET_USERS_FAILS', message: e.message});
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default userSaga;