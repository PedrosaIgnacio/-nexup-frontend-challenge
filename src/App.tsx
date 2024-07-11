import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';
import { AppLayout } from './layout/AppLayout';

const App: React.FC = () => {
  return (
    <AppLayout>
      <ProductManager />
    </AppLayout>
  );
};

export default App;
