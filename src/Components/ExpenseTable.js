// src/components/ExpenseTable.js
import React from 'react';

function ExpenseTable({ expenses, deleteExpense, setExpenses }) {
  const sortExpenses = (field) => {
    const sortedExpenses = [...expenses].sort((a, b) =>
      a[field].localeCompare(b[field])
    );
    setExpenses(sortedExpenses);
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => sortExpenses('description')}>
            Description 
          </th>
          <th>Amount</th>
          <th onClick={() => sortExpenses('category')}>
            Category 
          </th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${parseFloat(expense.amount).toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="delete-btn"
              >
                Delete
              </button>
          

