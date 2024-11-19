import * as React from 'react'

/**
 *
 * @param currentPage it has current page value
 * @param totalPages  number of pages on pagination
 * @param handlePageChange  set the current page
 * @returns
 */
const Pagination = ({data,currentPage,totalPages, handlePageChange}) => {

  if(data.length === 0){
        return null
    }

  return (
    <div className='flex items-center justify-between mx-auto w-[40%]'>
         <button onClick={()=>handlePageChange(currentPage-1)}
            disabled={currentPage === 1}
            className={`text-sm ${currentPage == 1 && 'text-slate-400'}`}>
            Prev
        </button>
        {/* here we have :
          -toatalPages is number of pages to display on screen it obtained form (total repo / 10 )
          -Array(length).fill('element') this method is used to generate array with provided element
          */}
        {Array(totalPages).fill(0).map((num,index)=>(
            <button className={`text-sm w-6 h-6 rounded-sm text-blue-500
              hover:text-white hover:bg-blue-400 ${currentPage == index+1 && '!text-white bg-blue-400'}`}
              key={index} onClick={()=>handlePageChange(index+1)}>
                {index + 1}
            </button>
        ))}
        <button onClick={()=>handlePageChange(currentPage+1)}
            disabled={currentPage === totalPages}
            className={`text-sm ${currentPage == totalPages && 'text-slate-400'}`}>
            Next
        </button>

    </div>
  )
}

export default React.memo(Pagination)