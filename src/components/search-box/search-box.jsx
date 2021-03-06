import React from 'react';
import 'components/search-box/search-box.css'

export const SearchBox= ({placeholder,handleChange})=>(
    <input
        className='search'
        type="search"
        placeholder={placeholder} 
        onChange={handleChange}
    />
)
