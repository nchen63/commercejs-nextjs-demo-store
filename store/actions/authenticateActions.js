import commerce from '../../lib/commerce'
import Router from 'next/router';

import { SET_CUSTOMER } from './actionTypes';

/**
 * Async get customer
 */
export const setCustomer = (customerId) => (dispatch) => {
  // First check is customer is logged in
  commerce.customer.isLoggedIn().then((resp) => {
    // If false redirect to /login
    if (!resp || resp === false) {
      Router.push('/login')
    }
  })
  return commerce.customer.about(customerId).then((customer) => {
    dispatch({ type: SET_CUSTOMER, payload: customer })
  }).catch(error => {
    console.log('Error attempting to set customer');
    throw error;
  })
}
