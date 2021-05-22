import './App.css';
import React from 'react';
import Contador from './components/Contador';
import Card from './components/layout/Cards';

export default () => (

    <div className= "app">
        <h1>Contador</h1>

        <div className= "Cards">

           <Card titulo="Contador componentizado" color="#0d3024">
               <Contador numeroInicial={10} />
           </Card>

        </div>

    </div>
)