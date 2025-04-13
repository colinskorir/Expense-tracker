// src/App.js
import React, { useState } from 'react';
import ExpenseTable from './Components/ExpenseTable';
import ExpenseForm from './Components/ExpenseForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <div className="form-section">
          <h2>Add Expense</h2>
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="table-section">
          <h2>Your Expenses</h2>
          <SearchBar setSearchTerm={setSearchTerm} />
          <ExpenseTable
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
            setExpenses={setExpenses}
          />
        </div>
      </div>
    </div>
  );
}

export default App;