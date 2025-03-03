import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {
  clear(key: string) {
    if (typeof window === 'undefined') {
      return null;
    }

    Cookies.remove(key);

    return null;
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return auth.clear(tokenKey);
  },

  clearUserInfo(userInfo = USER_INFO) {
    return auth.clear(userInfo);
  },

  get(key: string) {
      if (typeof window === 'undefined') {
        return null;
      }
  
      const cookieValue = Cookies.get(key);
      return cookieValue ? parse(cookieValue) : null;
  },

  getToken(tokenKey = TOKEN_KEY) {
      if (typeof window === 'undefined') {
          return 'server-token';
      }

      return auth.get(tokenKey);
  },

  getUserInfo(userInfo = USER_INFO) {
    return auth.get(userInfo);
  },

  set(value: string, key: string, isLocalStorage: boolean) {
    const isEmpty = (value: any) => value == null || (typeof value === 'object' && !Object.keys(value).length);

    if (isEmpty(value)) {
      return null;
    }

    Cookies.set(key, stringify(value), { secure: true, sameSite: 'Strict' });


    return null;
  },

  setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
    return auth.set(value, tokenKey, isLocalStorage);
  },

  verifyToken(token: any) {
    try {
      const decoded: { exp: number } = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime; 
    } catch (error) {
      return true;
    }
  },

  setUserInfo(value = '', isLocalStorage = false, userInfo = USER_INFO) {
    return auth.set(value, userInfo, isLocalStorage);
  },

}

export default auth;