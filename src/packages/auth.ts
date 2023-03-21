import { handleLogout } from "../components/header/components/logout/logout";

export function AccessToken (accessToken: any){
    localStorage.setItem('access_token', JSON.stringify(accessToken));
}

export function runLogoutTimer(dispatch: any, timer:number){
    setTimeout(() => {
        dispatch(handleLogout());
    }, timer);
}