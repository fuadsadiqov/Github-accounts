import React, { useEffect, useState } from 'react'
import { CiShare1 } from 'react-icons/ci'

export default function Output({data}) {
    const [repos, setRepos] = useState(null)  

    useEffect(() => {
      if(data != null){
        fetch(data.repos_url)
        .then(res => res.json())
        .then(item => setRepos(item))
      }
      console.log(repos);
    }, [data])

  return (
    <>
      {data && <div className='Output'>
        <div className="head">
          <div className='output-img'>{data !== null && <img width={100} src={data.avatar_url} alt="" />}</div>
            <div style={{fontSize: '18px', fontWeight: '700' }}>@{data !== null && data.login }</div>
            <div>Creating time: {data !== null && data.created_at.slice(0, 10) }</div>
            <div>Location: {data !== null && data.location } {data.location === null && "Not found"}</div>
            <div style={{display: 'flex', gap: '10px'}}>
              <div>Followers: {data !== null && data.followers }</div>
              <div>Following: {data !== null && data.following }</div>
            </div>
          </div>
        {repos && <div className="repos">
          <ul>
          {repos.map((repo, index) => {
              return <li key={index}>{index + 1}. {repo.name}<a href={repo.clone_url}><CiShare1 color='black' /></a></li>    
            })}
          </ul>
        </div>}
    </div>}
    </>
  )
}
