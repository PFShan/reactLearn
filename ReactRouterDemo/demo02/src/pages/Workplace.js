import React from 'react'
import { Route, Link } from "react-router-dom";
import Money from './workplace/Money'
import Getup from './workplace/Getup'

function WorkPlace() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/Money'>Money</Link></li>
                    <li><Link to='/workplace/Getup'>Getup</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <h2>程序员攻略</h2>
                <Route path='/workplace/Money' component={Money}></Route>
                <Route path='workplace/Getup' component={Getup}></Route>
            </div>
        </div>
    )
}
export default WorkPlace