import { Link, useParams } from "react-router-dom";
import { REPO_DETAILS } from "../services/constants";
import useFetchData from "../services/useFetchData";
import ReactLoading from 'react-loading';


interface RepoDetails {
    name: string;
    description: string;
    html_url: string;
    language: string;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
  }


/**
 *
 * @returns it gets param from url and return details about the repo
 */

  const RepoDetails = () => {
    const { name } = useParams();
    const {data, isLoading, error } = useFetchData(REPO_DETAILS+name);


    if(isLoading){
        return <div className='fixed inset-0 flex items-center justify-center'><ReactLoading type={'spokes'} color={'#0EA5E9'} height={30} width={30} /> <span className='text-sm md:text-base ml-4'> Loading...</span>  </div>
    }
    // if(error){
    //     return <div>Error : {error}</div>
    // }

  return (
    <div className="p-4">
        <div className="flex row items-center justify-between border-b py-2">
            <div>
                <h1 className="text-2xl font-bold text-sky-500">{data.name}</h1>
                <p className="text-sm text-gray-500">{data.description}</p>
            </div>
        <Link to={data?.html_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Visit Repo
        </Link>
        </div>

      <ul className="mt-4">
        <li><strong>Language:</strong> {data.language || 'Not specified'}</li>
        <li><strong>Forks:</strong> {data.forks}</li>
        <li><strong>Open Issues:</strong> {data.open_issues}</li>
        <li><strong>Watchers:</strong> {data.watchers}</li>
      </ul>
    </div>
  )
}

export default RepoDetails