
import React, { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children  }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-gray-800 text-white w-1/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Link 1</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Link 2</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Link 3</a></li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Vendas</h1>
        </header>
        <div className="w-full text-gray-800 grid grid-cols-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
