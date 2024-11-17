import * as React from 'react'
// import Logo from '../../assets/react.svg'


/**
 *
 * header file customize the header contents here,
 * like logo title and add other contents
 */
const Header = () => {
  return (
   <header className='w-full bg-slate-100 '>
        <div className='container mx-auto px-4 py-4'>
            <div className='flex h-15 items-center'>
                {/* <img alt='repo logo' src={Logo} className='w-50 h-50' height={50} width={50}/> */}
                <span className='text-md font-bold ml-2'> Github Repositories </span>
            </div>
        </div>
   </header>
  )
}

export default React.memo(Header)