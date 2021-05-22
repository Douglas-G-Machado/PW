import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {

    return(
        <div>
            <FamiliaMembro nome="homer Jay" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Marjorie" sobrenome= "Bouvier" />
            <FamiliaMembro nome="Bartholomew JoJo" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Lisa Marie" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Margareth" sobrenome={props.sobrenome} />
        </div>
    )
}