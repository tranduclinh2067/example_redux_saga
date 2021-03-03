import {call, put, takeEvery} from 'redux-saga/effects';

// 22.30

const apiURL = 'https://5fa24ce2ba0736001613b6c3.mockapi.io/admin';

function getAPI () {
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
    .catch((err) => {throw err})
}

function* fetchUsers(action) {
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