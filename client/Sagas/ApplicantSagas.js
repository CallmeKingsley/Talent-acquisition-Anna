import ApplicantRedux from '../Redux/ApplicantRedux'
import { select, put, call } from 'redux-saga/effects'
import { isNil } from 'ramda'
import History from '../History'

export function * createApplication (api, action) {
  try{
  console.log(action)

  const responds = yield call(api.createApplication, action.user)
  console.log(responds)
    if (!isNil(responds.data.Application)){
        yield put(ApplicantRedux.createApplicationSuccess(false))
        History.push('/')
    }
  }catch(e){
    console.log(e)
    yield put(ApplicantRedux.createApplicationFailure({ error: true, message: 'Network issue' }))
  }
}

// export function * getApplication (api, action){
//   try{
//    console.log(action)
//   }catch(e){ h
//     console.log(e)
//   }
// }