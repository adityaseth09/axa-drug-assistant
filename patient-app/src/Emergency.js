import React from 'react'
import Menu from './Menu'
import axa from './AxaApi'

function dispense() {
    axa.post('/pharmacy/buy').then(ans => console.log(ans))
}

const Emergency = () => (
        <div>
        <Menu/>
        <p>Emergency</p>
        <button onClick={dispense}>
          Save my life
        </button>
        </div>
)

export default Emergency
