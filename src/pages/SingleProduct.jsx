import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { Link } from 'react-router-dom';

export const loader = async({params}) => {
  const response = await customFetch(`/products/${params.id}`);

  return {product: response.data.data}
}

const SingleProduct = () => {
  const {product} = useLoaderData();
  const {image, title, price, description, colors, company} = product.attributes;
  const rupeesAmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-d grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
      
      <div className="">
        <h1 className='capitalize text-3xl font-bold'>{title}</h1>
        <h4 className='text-xl text-neutral-content font-bold mt-2'>
          {company}
        </h4>
        <p className="mt-3 text-xl">{rupeesAmount}</p>
        <p className='mt-6 leading-8'>{description}</p>
      </div>
      </div>
    </section>
  )
}

export default SingleProduct