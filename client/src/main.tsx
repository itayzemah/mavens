import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { GameProvider } from './Pages/Game/Context.tsx';
import { Game } from './Pages/Game/Game.tsx';
import { GameOver } from './Pages/Game/GameOver.tsx';
import { Waiting } from './Pages/Game/Waiting.tsx';
import { Home } from './Pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lobby',
    element: <Waiting />,
  },
  {
    path: '/game',
    element: <Game timeoutInMS={import.meta.env.VITE_TIMEOUT_IN_MS} />,
  },
  {
    path: '/error',
    element: <GameOver />,
  },
]);
// const store = configureStore({ reducer: { user: userReducer } });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </React.StrictMode>
);
