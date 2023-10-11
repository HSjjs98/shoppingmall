import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { getCart } from '../../API/Firebase'
import {useQuery} from '@tanstack/react-query'
import { useAuthContext } from '../../Context/AuthContext'

export default function CartStatus(){
    const {user} = useAuthContext();
    const {data: products} = useQuery(['carts'], () => getCart(user.uid))
    return(
        <div className='relative'>
            <AiOutlineShoppingCart className='text-4xl'/>
            {products && <p className='w-5 h-5 text-center bg-brand rounded-full absolute -top-1 -right-2'>{products.length}</p>}
        </div>
    )
}