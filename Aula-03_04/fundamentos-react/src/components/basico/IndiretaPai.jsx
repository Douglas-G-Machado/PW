import React, {useState} from 'react';

import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [curso, setCurso] = useState('Desenvolvimento de Sistemas')
    const [aluno, setAluno] = useState('')

    function obterAluno(nome) {
        setAluno(nome)
    }
    return(
        <div>
            <h3>Curso: {curso}</h3>
            <h3>Aluno: {aluno}</h3>

            <p><IndiretaFilho quandoClicar={obterAluno} /></p>
        </div>
    )
}