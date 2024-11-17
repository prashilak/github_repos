import React from 'react'

/**
 *
 * @param searchTerm is a search value
 * @param onSearchHandle it handle to set searchterm 
 * @returns
 */
const SearchBox = ({searchTerm,onSearchHandle}) => {
  return (
    <div className='border rounded-sm '>
        <input type='text'
         className='w-full text-sm px-4 py-1 font-light text-slate-800'
         placeholder='Find a repository'
         value={searchTerm}
         onChange={(e)=> onSearchHandle(e.target.value)}/>
    </div>
  )
}

export default React.memo(SearchBox);