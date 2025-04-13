// src/components/ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.description &&
      formData.amount &&
      formData.category &&
      formData.date
    ) {
      addExpense(formData);
      setFormData({
        description: '',
        amount: '',
        category: '',
        date: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      