import { redirect } from "react-router-dom";

export async function action(){
    await localStorage.removeItem('token');
    return redirect('/');
}