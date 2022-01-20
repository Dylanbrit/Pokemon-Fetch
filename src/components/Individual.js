import React from "react";

// FIRST
// document.getElementById('button').addEventListener('click', changeVisibility(), null);
// function changeVisibility()
// {
//     document.getElementById('divToHide').style.display = "none";
//     document.getElementById('divToShow').style.display = "block";
// }

// SECOND
// let firstDivShowing = true;

// function changeDisplay() {
//     if (firstDivShowing) {
//         // hide first div
//         // show second div
//         // set firstDivShowing to false
//     } else {
//         // hide second div (*)
//         // show first div
//         // set firstDivShowing to true
//     }
// }

// using event target- if the id matches the target BLOCK style else if the id does not match, NONE


const Individual = (props) => (
    <div>
        <button id={`${props.pokemon}-button`} className="button" onClick={(e) => {
                getStats(props.buttonClicked, props.pokemon)
                // toggle(e.target.id)
                // console.log(e.target.id)
                props.changeButton()
        }}>{props.pokemon}</button>
        <div id={props.pokemon} style={{visibility: 'hidden'}}></div>
    </div>
)

// i should be able to filter the buttons as well, so that as i type it narrows down the buttons

const getStats = (status, name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
        return response.json()
    }).then((data) => {
        createDetails(status, data)
    })
}

// const toggle = (id) => {
//     document.querySelectorAll('.button').forEach((button) => {
//         if (button.id === id) {
//             button.style.visibility = 'visible'
//         } else {
//             button.style.visibility = 'hidden'
//         }
//     })
// }

const createDetails = (status, data) => {
    const name = data.name
    const grabDiv = document.getElementById(name)
    if (status === false) {
        const hp = data.stats[0].base_stat
        const attack = data.stats[1].base_stat
        const defense = data.stats[2].base_stat
        const specialAttack = data.stats[3].base_stat
        const specialDefense = data.stats[4].base_stat
        const speed = data.stats[5].base_stat

        const hpEl = document.createElement('p')
        const attackEl = document.createElement('p')
        const defenseEl = document.createElement('p')
        const specialAttackEl = document.createElement('p')
        const specialDefenseEl = document.createElement('p')
        const speedEl = document.createElement('p')
        const total = document.createElement('h4')
        hpEl.textContent = `HP- ${hp}`
        attackEl.textContent = `Attack- ${attack}`
        defenseEl.textContent = `Defense- ${defense}`
        specialAttackEl.textContent = `Special Attack- ${specialAttack}`
        specialDefenseEl.textContent = `Special Defense- ${specialDefense}`
        speedEl.textContent = `Speed- ${speed}`
        total.textContent = `Base Stat Total- ${hp + attack + defense + specialAttack + specialDefense + speed}`
        grabDiv.append(hpEl, attackEl, defenseEl, specialDefenseEl, specialAttackEl, speedEl, total)
    
        grabDiv.style.visibility = 'visible'
    } else if (status === true) {
        // grabDiv.forEach((button) => {
        //     if (button.id === id) {
        //         button.style.visibility = 'visible'
        //     } else {
        //         button.style.visibility = 'hidden'
        //     }
        // })
        grabDiv.innerHTML = ''
        grabDiv.style.visibility = 'hidden'
    }
}

// maybe play around with initial app rendering and api calls using component will mount
// https://www.pluralsight.com/guides/how-to-use-componentwillmount
// https://www.reactjs.org/docs/react-component.html

// also play around with just immediately putting all the fetched data onto the screen, then sorting by stats
// like i could fetch, and then for each pokemon, present all its data at once
// maybe in columns?

export default Individual