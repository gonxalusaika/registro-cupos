import React from 'react';

const lateral = {
    width: '700px',
    position: 'fixed',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    opacity: '.7'
}

const lateralIzquierdo = { 
    ...lateral,
    backgroundImage: 'url(img/lateral-izquierdo.png)',
    height: '593px',
    left: '-100px',
    bottom: 0,
}

const lateralDerecho = {
    ...lateral,
    backgroundImage: 'url(img/lateral-derecho.png)',
    backgroundPosition: 'right top',
    height: '675px',
    right: '-100px'
}

class Relleno extends React.Component {
    render() {
        return (
            <div className='fondo'>
                <div style={lateralIzquierdo} />
                <div style={lateralDerecho} />
            </div>
        );
    }
};

export default Relleno;