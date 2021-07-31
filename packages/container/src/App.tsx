import React, { useState } from 'react'
// import { PrivateRoutes, PublicRoutes } from './presentation/routes';

const App: React.FC = () => {
  const accessToken = !!sessionStorage.getItem('SessionKey')
  const [isSignedIn] = useState(accessToken)

  // return isSignedIn ? <PrivateRoutes /> : <PublicRoutes onSignIn={onSignIn} />;
  return isSignedIn ? <div>NÃO LOGADO</div> : <div>LOGADO</div>
}

export default App
