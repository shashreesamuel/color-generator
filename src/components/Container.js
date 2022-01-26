import React from 'react'
import { useState } from 'react';
// import { css_colors } from '../styles';
function Container() {

    const [ color, setColor ] = useState('');

    const [theme, setTheme] = useState("light")



    const [ opacity, setOpacity ] = useState('');

    // function rgbToHex(r, g, b) { 
    //     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); 
    // }

    function componentToHex(c) { 
        var hex = c.toString(16); return hex.length === 1 ? "0" + hex : hex; 
    }
      
    const [ filter, setFilter ] = useState('filter( )');

    const [ gradient, setGradient ] = useState('linear-gradient( rgb( ), rgb( ), rgb( ) )');

    // const handleRandomColor = () => {
    
    //     setRandomColor( colors[ Math.floor( Math.random() * ( colors.length + 1 ) ) ][ "color" ] )

    // }

    return (
        <div>
            <span style={{'backgroundColor': color, 'opacity': opacity, 'filter': filter, 'background': gradient }} className='color-container' />
            {/* <h3>{rgbToHex(74, 3, 252)}</h3> */}
            {/* <span className="details-container">{color}</span> */}
            <div className="buttons">
                <input type="text"  className="color-btn" value={color} required onChange={(e) => setColor(e.target.value)} placeholder='Enter a color code'/>
                <input type="text"  className="opacity-btn" value={opacity} required onChange={(e) => setOpacity(e.target.value)} placeholder='Enter a opacity'/>
                <input type="text"  className="filter-btn" value={filter} required onChange={(e) => setFilter(e.target.value)} placeholder='Enter a filter'/>
                <input type="text" className='gradient-btn' value={gradient} required onChange={(e) => setGradient(e.target.value)} placeholder='Enter a gradient'/> 
            </div>
{/* 
            <h7 className='generate-text'>Supported filter values: &nbsp;blur();
                    &nbsp;brightness();
                    &nbsp;contrast();
                    &nbsp;drop-shadow();
                    &nbsp;grayscale();
                    &nbsp;hue-rotate();
                    &nbsp;invert();
                    &nbsp;opacity(;
                    &nbsp;saturate();
                    &nbsp;sepia()
            </h7>  */}
        </div>
    )
}

export default Container;