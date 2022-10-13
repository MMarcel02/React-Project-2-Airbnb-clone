import React from 'react'
import ClusterPhoto from '../images/clusterPhoto.png'

export default function Hero () {
    return (
        <div className='container'>
            <img src={ClusterPhoto} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p> 
        </div>
    )
}