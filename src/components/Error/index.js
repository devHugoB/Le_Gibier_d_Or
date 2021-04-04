import React, { useState } from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { ErrorContainer, ErrorContent, ErrorItems, ErrorH1, ErrorP } from './ErrorElements'
const Error = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ErrorContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ErrorContent>
                <ErrorItems>
                    <ErrorH1>Error 404</ErrorH1>
                    <ErrorH1>Page Not Found !</ErrorH1>
                    <ErrorP>La page que vous avez demandé n'existe pas...</ErrorP>
                </ErrorItems>
            </ErrorContent>
        </ErrorContainer>
    )
}

export default Error
