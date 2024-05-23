import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabvar from './Nabvar'
import '../styles.css'


export default function Now() {
    return (
        <>
            <Nabvar />

            <div className="custom-shape-divider-top-1716489085 my-14 bg-pink-200 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='relative z-10'>
                <Outlet />
            </div>
        </>
    )
}
