import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector(({ui})=>ui.showCart);
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(({ui})=>ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(()=>{
    // const sendCartData = async () =>{
    //   dispatch(uiActions.showNtification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data!'
    //   }));
    //   const response = await fetch('https://buhahah-f4996-default-rtdb.firebaseio.com/cart.json',{
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   });
    //   if(!response.ok){
    //     throw new Error('Sending cart data failed!');
    //   }
    //   dispatch(uiActions.showNtification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Sent cart data successfully!'
    //   }));
    // };

    // if(isInitial){
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error)=>{
    //   dispatch(uiActions.showNtification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!'
    //   }));
    // });
    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.changes){
      dispatch(sendCartData(cart));
    } 
  },[cart, dispatch]);

  return (
    <Fragment>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        <Layout>
          {showCart && <Cart />}
          <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
