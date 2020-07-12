import React from 'react';
import Section from '../Section/Section';
import styles from './cockpit.module.css';


const cockpit = (props) => {
    return (
        <div style={styles} className="sections">
            <Section title="Wall of Honor" cards={props.state.honored} />
            <Section title="Safety rules" info="Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui." />
        </div>
    )
}

export default cockpit;