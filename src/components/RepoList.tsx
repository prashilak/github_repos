import React, { useCallback, useMemo, useState } from 'react'
import useFetchData from '../services/useFetchData';
import { GODADDY_REPO } from '../services/constants';
import ReactLoading from 'react-loading';
import ListItem from './ListItem';
import Pagination from './Pagination';
import SearchBox from './SearchBox';


/**
 *
 *  RepoList has a functionality to list down the repositary and
 * handle action performed on that.
 */
const RepoList = () => {

    //useFetchData is a custome hook to build for handle asynchronous task it accepts the path.
    const {data, isLoading, error } = useFetchData(GODADDY_REPO);
    const [searchTerm,setSearchTerm] =useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const perPageCount = 10;




    // set current page change
    const currentPageChange = useCallback((page:number)=>{
        setCurrentPage(page)
    },[])

     // set the search term
     const handleSearch =useCallback((search:string)=>{
        setSearchTerm(search);
        setCurrentPage(1)
    },[])

    // filter data according to the search term and return
    const filterData = useMemo(()=>{
            return data.filter((repo:any)=> repo.name.toLowerCase().includes(searchTerm))
    },[data, searchTerm]);

    // handle pagination on data , trim data according perpage count
    const handlePagination = useMemo(()=>{
        const startPage = (currentPage - 1) * 10;
        return filterData.slice(startPage,startPage + perPageCount)
    },[filterData,currentPage])

    //calculate the number of pages to be display
    const totalPage = useMemo(()=>{
        return Math.ceil(filterData.length/perPageCount);
    },[data])


    if(isLoading){
        return <div className='fixed inset-0 flex items-center justify-center'><ReactLoading type={'spokes'} color={'#0EA5E9'} height={30} width={30} /> <span className='text-sm md:text-base ml-4'> Loading...</span></div>
    }
    if(error){
        return <div>Error : {error}</div>
    }

  return (
    <div>
        <SearchBox
           searchTerm={searchTerm}
           onSearchHandle={handleSearch}
           />
        <div className='border-b  my-5' />
        <ListItem data={handlePagination}/>
        <Pagination
           currentPage={currentPage}
           totalPages={totalPage}
           handlePageChange={currentPageChange}
           />
    </div>
  );
}

export default React.memo(RepoList)