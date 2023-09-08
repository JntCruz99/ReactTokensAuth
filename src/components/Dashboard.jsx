// src/components/Dashboard.js
import React from 'react';

function Dashboard({ products, onLogout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected dashboard!</p>
      <button onClick={onLogout}>Logout</button>

      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
