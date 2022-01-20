import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditPage from '../components/EditPage'

// const returnData = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/`).then((response) => {
//         return response.json()
//     }).then((data) => {
//         const info = data.results
//         info.map((pokemon) => {
//             const data = pokemon.name
//             return data
//         })
//     })
// }

// How do I dynamically create a <Route> for each Pokemon from the list?
// Once created how do I match the path to the component?

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/EditPage" component={EditPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter