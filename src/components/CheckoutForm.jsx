import React from 'react';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

export const action  = (store) => async() => {
    console.log(store);
    return null;
}

const CheckoutForm = () => {
 return <Form method='POST' className='flex flex-col gap-y-8'>
    <h4 className="font-medium text-xl capitalize">shipping information</h4>
    <FormInput label='first name' name='name' type='text' />
    <FormInput label='address' name='address' type='text' />
    <div className="mt-4">
        <SubmitBtn text='Place your order' />
    </div>
 </Form>
}

export default CheckoutForm