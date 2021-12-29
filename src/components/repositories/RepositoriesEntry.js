import React from 'react'

const RepositoriesEntry = ({ repo }) => {
    return (
        <div class="card mb-3">

            <div class="card-body">


                <h3 class="card-title">{repo.name}</h3>
                <div className="d-flex flex-row">
                    <label className="mr-4">Is Private? </label>
                    <input  className=" align-self-center" type="checkbox" checked={repo.isPrivate} />

                </div>
                <a href={repo.url}>{repo.url}</a>
               


            </div>
        </div>
    )
}

export default RepositoriesEntry
