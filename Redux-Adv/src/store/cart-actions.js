import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const sendCartData = (cart) =>{
    return async (dispatch)=>{
        dispatch(uiActions.showNtification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
          }));
        async function sendRequest(){
            const response = await fetch('https://buhahah-f4996-default-rtdb.firebaseio.com/cart.json',{
            method: 'PUT',
            body: JSON.stringify(cart)
            });
            if(!response.ok){
                throw new Error('Sending cart data failed!');
            }
        }

        try{
            await sendRequest();
            dispatch(uiActions.showNtification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
              }));
        }
        catch(error){
            dispatch(uiActions.showNtification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
              }));
        }
        
    }
}

export const fetchCartData =()=>{
    return async dispatch =>{
        const fetchData = async ()=>{
            const response = await fetch('https://buhahah-f4996-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Fetching cart data failed!');
            }
            const data = await response.json();
            return data;
        }

        try{
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }
        catch(error){
            dispatch(uiActions.showNtification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
              }));
        }
    }
}