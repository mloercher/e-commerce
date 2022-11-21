import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi';

function Home() {
    const {data, error, isLoading} = useGetAllProductsQuery()
    return (
        <h1>Home</h1>
    )
}

export default Home;