import styled from 'styled-components'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

import Modal from 'react-modal'
import { useState } from 'react'

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
        <>
            <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <Modal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}>
                    <h2>Cadastrar transação</h2>
                </Modal>
            <GlobalStyle/>
        </>
    )
}
