/**
 * SignIn - thunx
 */

import axios from 'axios';
import { signInError, signInRequest, signInSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const getSignIn = body => async dispatch => {
  await dispatch(signInRequest());
  try {
    const response = await axios.post(`/${API.SIGN}`, body);

    await localStorage.setItem(
      'userData',
      JSON.stringify(response.data.payload)
    );
    await dispatch(signInSuccess(response.data.payload));
    await toastr('success', 'Sign Successfully!');
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(signInError(error));
  }
};
