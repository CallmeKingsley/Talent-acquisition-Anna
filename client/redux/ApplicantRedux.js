import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------Type and Action creation ----------- */
const { Types, Creators } = createActions({
    createApplication: ['user'],
    createApplicationFailure: ['error'],
    createApplicationSuccess: ['user', 'loading'],
})

export const ApplicantType = Types
export default Creators

/* ------------ Initial State ----------- */
export const INITIAL_STATE = Immutable({
    loading: {
        applicant: null
    },
    errors: {
        applicant: false
    }
})
/* ------------ Selectors ----------- */
export const ApplicantSelector = {
  error: state => state.errors.applicant
}

/* ------------ Reducers ----------- */
export const createApplication = (state) =>
  state.merge({
    loading: { ...state.loading, applicant: true },
    errors: { ...state.errors, applicant: null }
})

export const createApplicationFailure = (state,{error}) =>
  state.merge({
    loading: { ...state.loading, applicant: false },
    errors: { ...state.errors, applicant: error }
})

export const createApplicationSuccess = (state,{loading}) =>
  state.merge({
    loading: { ...state.loading, applicant: loading },
    errors: { ...state.errors, applicant: null }
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_APPLICATION]: createApplication,
  [Types.CREATE_APPLICATION_SUCCESS]: createApplicationSuccess,
  [Types.CREATE_APPLICATION_FAILURE]: createApplicationFailure,
})
