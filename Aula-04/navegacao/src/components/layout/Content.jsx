import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Conteudo01 from '../../views/contents/Conteudo01'
import Conteudo02 from '../../views/contents/Conteudo02'
import Conteudo03 from '../../views/contents/Conteudo03'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/conteudo01/:usuario">
                <Conteudo01 />
            </Route>
            <Route path="/conteudo02">
                <Conteudo02 />
            </Route>
            <Route path="/conteudo03">
                <Conteudo03 />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content	
