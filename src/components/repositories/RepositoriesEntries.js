import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredRepositories, startLoadingRepositories } from '../../actions/repositories';
import RepositoriesEntry from './RepositoriesEntry'

const RepositoriesEntries = () => {
    const [search, setSearch] = useState('');

    const { repositories } = useSelector(state => state.repositories)
    const dispatch = useDispatch();

    const handleInputChange=(e)=>{
        setSearch(e.target.value);
        if(e.target.value.length>0){

            const filtered = repositories.filter(repo=>{
                return repo.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
            })
            dispatch(filteredRepositories(filtered));
        }else{
            dispatch(startLoadingRepositories());
        }
    }
    return (
        <div className="journal__body">

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Search</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={search} onChange={handleInputChange} placeholder="Search Repositories"/>
            </div>
            {repositories.map(repo => {
                return (
                    <RepositoriesEntry key={repo.databaseId} repo={repo} />
                )
            })}

        </div>
    )
}

export default RepositoriesEntries
