import React from 'react'

function CardComponents(props) {
    const {user_} = props;

    return (
        <div style={{
            border: `3px solid ${user_.border}`,
            margin: '10px 0'
        }}>
            <p>{user_.id}</p>
            <p>{user_.name}</p>
            <p>{user_.permission}</p>
            
        </div>
    )
}

export default CardComponents
