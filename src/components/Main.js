import React from 'react'
import List from './List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.createEl = this.createEl.bind(this)
        this.onClick = this.onClick.bind(this)
        this.filterData = this.filterData.bind(this)
        this.createURL = this.createURL.bind(this)
        this.changeButton = this.changeButton.bind(this)
        this.toggle = this.toggle.bind(this)
        this.state = {
            list: [],
            filter: '',
            clicked: false
        }
    }
    changeButton() {
        if (this.state.clicked === false) {
            this.setState(() => {
                return {
                    clicked: true
                }
            })
        } else if (this.state.clicked === true) {
            this.setState(() => {
                return {
                    clicked: false
                }
            })
        }
    }
    toggle() {
        document.querySelectorAll('.button').forEach((button) => {
            if (button.id === id) {
                button.style.visibility = 'visible'
            } else {
                button.style.visibility = 'hidden'
            }
        })
    }
    createEl(name) {
        this.setState(() => {
            return {
                list: this.state.list.concat([name])
            }
        })
    }
    onClick() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=386').then((response) => {
            return response.json()
        }).then((data) => {
            const results = data.results
            results.forEach((pokemon) => {
                const name = pokemon.name
                this.createEl(name)
            })
        })
    }
    createURL(name) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        })
    }
    filterData(input) {
        this.setState(() => {
            return {
                filter: input
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Search...</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" id="input" placeholder="Enter name here"  />
                        <button>Click</button>
                    </form>
                <input type="text" placeholder="search" onChange={(e) => {
                    this.filterData(e.target.value)
                }} />
                <List buttonClicked={this.state.clicked} changeButton={this.changeButton} pokemon={this.state.list.filter((pokemon) => {
                    return pokemon.includes(this.state.filter)
                })} />
                <button onClick={this.onClick}>Click for All</button>
            </div>
        )
    }
}

export default App