import React from 'react'

function CardComponents(props) {
    const {user_} = props;

    return (
        <div style={{
            border: `5px solid ${user_.border}`,
            margin: '20px auto',
            width: '80%',
            borderRadius: '999px',
            background: '#f7f7f7',
            boxShadow: '1px 1px 10px #00000063',
            cursor: 'default',
        }}>
            <p>{user_.id}</p>
            <p>{user_.name}</p>
            <p>{user_.permission}</p>
            
        </div>
    )
}

export default CardComponents
