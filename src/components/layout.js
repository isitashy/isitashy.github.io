import React from 'react'

import {Header, Footer} from '../components/'

import '../styles/index.scss'
import layouStyles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={layouStyles.container}>
            <div className={layouStyles.content}>
                <Header />
                { children }
            </div>
            <Footer />
        </div>


    )
}

export default Layout