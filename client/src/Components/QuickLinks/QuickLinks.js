import React from 'react'

const QuickLinks = ({path, disp}) => {
  return (
    <div style={{ 
      paddingBottom: '5px'
    }}>
      <a href={path} style={{ 
        textDecoration: 'none',
        color: 'white'
      }}>{disp}</a>
    </div>
  )
}

export default QuickLinks
