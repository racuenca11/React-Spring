import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Reemplazar con su Client ID

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const onSuccess = (response) => {
    console.log('Inicio de sesión exitoso:', response);
    setProfile(response.profileObj);
    setIsLoggedIn(true);
  };

  const onFailure = (response) => {
    console.error('Error en inicio de sesión:', response);
  };

  const onLogoutSuccess = () => {
    setIsLoggedIn(false);
    setProfile(null);
  };

  return (
    <div>
      <h1>Login</h1>
      {!isLoggedIn ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Iniciar sesión con Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div>
          <p>Bienvenido, {profile.name}</p>
          <GoogleLogout
            clientId={clientId}
            buttonText="Cerrar sesión"
            onLogoutSuccess={onLogoutSuccess}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
