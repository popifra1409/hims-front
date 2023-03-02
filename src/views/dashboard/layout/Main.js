import React from 'react'
import About from './About'

const Main = (props, { toggle }) => {
    return (
        <>
            < div className={`main-block mt-4`} >
                <div className={`main-content`}>
                    {/* main content */}
                    <main className=''>
                        {props.children}
                    </main>
                </div>
                <About />
            </div>
        </>
    )
}

export default Main
