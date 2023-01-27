import React from 'react'
import About from './About'

const Main = (props) => {
    return (
        < div className="main-block" >
            <div className="main-content">
                {/* main content */}
                <main className=''>
                    {props.children}
                </main>
            </div>
            <About/>
        </div>
    )
}

export default Main
