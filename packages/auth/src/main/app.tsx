import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/presentation/components'
import 'antd/dist/antd.css'

const App: React.FC = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
)

export default App
