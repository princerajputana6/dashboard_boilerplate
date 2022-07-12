
import * as types from "./actionTypes";
import { auth, googleAuthProvider, facebookAuthProvider, TwitterAuthProvider } from "../firebase";
import swal from 'sweetalert';

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = ({ user, additionalData }) => ({
  type: types.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const fbSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const fbSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const fbSignInFail = (error) => ({
  type: types.TWITTER_SIGN_IN_FAIL,
  payload: error,
});

const twSignInStart = () => ({
  type: types.TWITTER_SIGN_IN_START,
});

const twSignInSuccess = (user) => ({
  type: types.TWITTER_SIGN_IN_SUCCESS,
  payload: user,
});

const twSignInFail = (error) => ({
  type: types.TWITTER_SIGN_IN_FAIL,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});


export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess({ user, additionalData: { displayName } }));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .then((result) => alert("You Loged In Sucessfully with :" + result.user ))
      .catch((error) => swal({
        title: "Sorry!!!",
        text: "Invalid Credential",
        icon: "warning",
      }) || swal.close() || dispatch(loginError(error.message)));
  };
};

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};

export const fbSignInInitiate = () => {
  return function (dispatch) {
    dispatch(fbSignInStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
      .then((result) => {
        dispatch(fbSignInSuccess(result.user));
      })
      .catch((error) => dispatch(fbSignInFail(error.message)));
  };
};

export const twSignInInitiate = () => {
  return function (dispatch) {
    dispatch(twSignInStart());
    auth
      .signInWithPopup(TwitterAuthProvider.addScope("user_birthday, email"))
      .then((result) => {
        dispatch(twSignInSuccess(result.user));
      })
      .catch((error) => dispatch(twSignInFail(error.message)));
  };
};
export const logoutInitiate = () => {
  
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .then((resp) => types.LOGOUT_SUCCESS)
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
