import React from 'react';

function clicked (){
    alert(`You clicked on the button`);
    document.getElementsByClassName('btn')
}

export default function Navbar() {
    return (
        <>
            <button className='btn btn-success p-3' onClick={clicked}>Click me</button>
        </>
    );
}
