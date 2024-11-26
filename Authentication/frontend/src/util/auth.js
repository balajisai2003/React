import { redirect } from 'react-router-dom';

export function getAuthToken(){
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();
    if(!token){
        return null;
    }
    if( tokenDuration <= 0){
        return 'EXPIRED';
    }
    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }
}

export function getTokenDuration(){
    const expires = localStorage.getItem('expires');
    const expirationDate = new Date(expires);
    const current = new Date();
    return expirationDate.getTime() - current.getTime();
}