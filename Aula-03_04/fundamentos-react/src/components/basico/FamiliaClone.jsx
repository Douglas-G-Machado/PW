import React, {cloneElement} from 'react';

export default props => {

    return(
        <div>
            {/* Para um único elemento filho*/}
            {/* {cloneElement(props.children, {...props})} */}

            {/*para vários elementos filhos */}
            {props.children.map((child) => {
                return cloneElement(child, { ...props });
            })}
        </div>
    )
}