/* eslint-disable import/no-anonymous-default-export */
import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // determines whether a saved token exists and is still valid.
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // the user token is retrieved from localStorage.
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // user token is saved to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // Clear the localStorage of the user token and profiles.
    localStorage.removeItem('id_token');
    // by doing so, the page will reload and the application's state will be cleared.
    window.location.assign('/');
  }
};

export default new AuthService();