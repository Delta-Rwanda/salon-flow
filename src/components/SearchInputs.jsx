import React from 'react'

const SearchInputs = ({placeholder, Icon}) => {
  return (
    <div className='relative flex items-center'>
        <Icon size={20} className='absolute flex left-2 text-gray-400'/>
        <input 
            type="text"
            className='bg-white rounded-md p-4 w-60 outline-none text-sm pl-8'
            placeholder={placeholder}
        />
    </div>
  )
}

export default SearchInputs
