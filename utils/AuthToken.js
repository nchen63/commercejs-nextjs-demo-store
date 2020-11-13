import commerce from '../lib/commerce';
import jwtDecode from 'jwt-decode';
import Router from 'next/router';

export const AuthToken = token => {

  /**
   * Fetches and returns a JWT which authorizes
   * the customer for 24 hours
   *
   * @param {String} token // token={token_from_url}
   */
    commerce.customer.getToken(token).then((resp) => {
      this.setState({ token: resp });
    }).catch((error) => {
      console.log('The token was was saved', error);
    })

  if (!token) {
    Router.push('/login');
  }

  // Decodes the token
  jwtDecode(this.token);

  /**
   * Checks if the token is expired
   */
  isExpired() {
    return new Date() > this.decodedToken.exp;
  }

  /**
   * Checks if the token is valid
   */
  isValid() {
    return !this.isExpired;
  }

  /**
   * If the JWT token is valid, fetch the customer id
   */

    if (isValid) {
      return commerce.customer.id().then((customer) => {
        this.setState({ customer: customer });
      }).catch((error) => {
        console.log('Customer not found', error)
      });
    }


  /**
   * Routes to customer protected route page
   */
  static async routeToCustomerPage() {
    await this.router.push('/account');
  }
}
