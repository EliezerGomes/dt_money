import styled from 'styled-components'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionsModal } from './components/NewTransactionsModal'
import { TransactionsProvider } from './TransactionsContext'

Modal.setAppElement('#root')

const Title = styled.h1`
    font-size: 64px;
    color: #8257e6;
`

export function App(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return(
        <TransactionsProvider>
            <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
            <GlobalStyle/>
        </TransactionsProvider>
    )
}
