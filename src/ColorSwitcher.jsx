import React, { useState } from 'react';

const ColorSwitcher = () => {
    // Define the available colors
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    
    // State to hold the current background color
    const [backgroundColor, setBackgroundColor] = useState('white');

    // Function to change the background color
    const changeColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div style={{width: '100%', height: '100vh', backgroundColor: backgroundColor}}>
           {/* Stylig the Header */}
            <h1 style={{ textAlign: 'center', padding: '20px' }}>Color Switcher</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {colors.map(color => (
                //   button to display the color
                  <button 
                        key={color} 
                        onClick={() => changeColor(color)} 
                        style={{ padding: '10px', backgroundColor: color, color: 'white', border: 'none', cursor: 'pointer' }}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorSwitcher;
