import React from 'react'
import Individual from './Individual'

const List = (props) => (
    <div>
        {props.pokemon.length === 0 ? <p>no pokemon</p> : props.pokemon.map((pokemon) => {
            return <Individual key={pokemon} changeButton={props.changeButton} pokemon={pokemon} buttonClicked={props.buttonClicked} />
        })}
    </div>
)

export default List