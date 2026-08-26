import React from 'react'

function Letter({ char, className }) {
    return (
        <span className={className}>{char}</span>
    )
}

export default Letter