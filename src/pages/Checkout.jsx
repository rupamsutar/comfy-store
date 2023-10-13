import React from 'react'
import { CartTotals, CheckoutForm, SectionTitle } from '../components'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const loader = (store) => () => {
  const user = store.getState().userState.user

  if(!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
}

const Checkout = () => {
  const cartTotal = useSelector(store => store.cartState.cartTotal)

  if (cartTotal === 0) {
      return <SectionTitle text='Your Cart is Empty' />
  }
return (
  <>
      <SectionTitle text='Place your order' />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
              <CheckoutForm />
              <CartTotals />
      </div>
  </>
)
}

export default Checkout