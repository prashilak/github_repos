import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';



interface DataObject{
    id:number,
    name:string,
    private:boolean,
    description:string,
    language:string,
    updated_at:string
}

/**
 *
 * @param data is array of repo list
 * @returns
 */
const ListItem = ({data}) => {

    // handle empty data error
    if(data.length === 0){
        return(<div className='flex justify-center items-center text-sm text-slate-800'>no repo created yet...</div>)
    }

  return (data?.map((repo:DataObject)=>(
    <li key={repo.id} className='list-none mb-4 py-2 group transition-all duration-300 border-b  hover:border-slate-950'>
      <Link  to={`/repos/${repo?.name}`}>
          <div className='text-xl font-semibold text-sky-500'><span className='hover:underline'>{repo?.name}</span>
          <span className='w-f rounded-lg px-2 border border-slate-600 text-[12px] text-slate-600 font-light'>{repo?.private?'Private':'Public'}</span></div>
          <div className='text-xs text-gray-500'>{repo?.description||''}</div>
          <div className='flex mt-2'>
              <div className='text-xs text-white px-2  w-fit rounded-lg border bg-green-600 '>{repo.language} </div>
              <span className='text-xs text-gray-500 ml-2'>Updated on {moment(repo?.updated_at).format('MMM DD, YYYY')}</span>
          </div>
      </Link>
   </li>)))
}

export default React.memo(ListItem)