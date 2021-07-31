import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const Router: React.FC = () => (
    <BrowserRouter basename="/operacao">
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
)

export default Router
