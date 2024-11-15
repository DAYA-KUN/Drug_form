import Cookies from 'js-cookie';

export const setAuthCookie = (token) => {
    Cookies.set('token', token, { expires: 1 / 24 }); // 1 hour expiry
};

export const getAuthCookie = () => {
    return Cookies.get('token');
};

export const checkAuth = () => {
    const token = getAuthCookie();
    return token != undefined; // Return true if token exists
};

export const clearAuthCookie = () => {
    Cookies.remove('token');
};
