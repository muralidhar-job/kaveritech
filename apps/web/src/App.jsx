
import React from 'react';
import { Toaster } from 'sonner';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <HomePage />
    </>
  );
}

export default App;
