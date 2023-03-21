import React, { useEffect, useState } from 'react'
import { CiShare1 } from 'react-icons/ci'

export default function Output({data}) {
    const [repos, setRepos] = useState(null)  
    const [slicedText, setSlicedText] = useState('')

    useEffect(() => {
      if(data != null){
        fetch(data.repos_url)
        .then(res => res.json())
        .then(item => setRepos(item))
      }
      if(data.created_at){
          setSlicedText(data.created_at.slice(0, 10))
      }
    }, [data])

  return (
    <>
       {data && <div className='Output'>
        <div className="head">
          <div className='output-img'>{data !== null && <img width={100} src={data.avatar_url} alt="" />}</div>
            <div style={{fontSize: '18px', fontWeight: '700' }}>@{data !== null && data.login }</div>
            <div>Creating time: {data !== null && slicedText }</div>
            <div>Location: {data !== null && data.location } {data.location === null && "Not found"}</div>
            <div style={{display: 'flex', gap: '10px'}}>
              <div>Followers: {data !== null && data.followers }</div>
              <div>Following: {data !== null && data.following }</div>
            </div>
          </div>
        {data.public_repos !== 0 && <div className="repos">
          <ul>
          {repos.map((repo, index) => {
              return <li key={index}>{index + 1}. {repo.name}<a href={repo.clone_url}><CiShare1 color='black' /></a></li>    
            })}
          </ul>
        </div>}
        {data.public_repos === 0 && <p className='notFound'>Not found any repository</p>}
    </div>}
    </>
  )
}
