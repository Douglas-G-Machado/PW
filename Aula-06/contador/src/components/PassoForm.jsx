import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="passoInput"></label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
}