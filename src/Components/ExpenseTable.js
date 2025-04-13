// src/components/ExpenseTable.js
import React from 'react';

function ExpenseTable({ expenses, deleteExpense, setExpenses }) {
  const sortExpenses = (field) => {
    const sortedExpenses = [...expenses].sort((a, b) =>
      a[field].localeCompare(b[field])
    );
    setExpenses(sortedExpenses);
  };