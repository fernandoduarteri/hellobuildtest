import React from 'react'
import { useSelector } from 'react-redux'

const ProfileScreen = ({ history }) => {

    const { profile } = useSelector(state => state.repositories)

    const handleBack = (e)=>{
        history.push('/');
    }
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="d-flex flex row mb-3">
                    <img className="avatar" src={profile.avatar} />
                    <h1>{profile.name}</h1>

                </div>
                <h3 className="display-5 text-primary">{profile.bio}</h3>
                <p><strong>Location:</strong> {profile.location}</p>
                {profile.email && <p>If you wish send an email, please send it, to: <code>{profile.email}</code></p>}
                <p>You can see all repositories in detail, following this link: <code><a href={profile.url}>{profile.url}</a></code></p>
                <button style={{width: '25%'}}className="btn btn-danger" onClick={handleBack}>Back</button>
            </div>

        </div>
    )
}

export default ProfileScreen
