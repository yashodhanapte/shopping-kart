import React from 'react'

const PageTitle = ({title = 'Shooopppoo'}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <h1>{ title }</h1>
        </div>
    )
}

export default PageTitle
