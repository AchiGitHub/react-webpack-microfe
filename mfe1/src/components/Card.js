import React from 'react'

function Card({ imageURL, name, job }) {
    return (
        <div style={styles.card}>
            <img src={imageURL} alt="Avatar" style={{ width: '100%' }} />
            <div style={styles.container}>
                <h4><b>{name}</b></h4>
                <p>{job}</p>
            </div>
        </div>
    )
}

export default Card


const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
    },
    container: {
        padding: '2px 16px',
    }
}