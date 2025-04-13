// src/App.js
import React, { useState } from 'react';
import ExpenseTable from './Components/ExpenseTable';
import ExpenseForm from './Components/ExpenseForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  
}

export default App;