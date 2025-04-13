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
     
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="descriptionDetail"
          value={formData.descriptionDetail || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Select category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select category</option>
          <option value="Food">Food</option>
          <option value="">Utilities</option>
          <option value="Personal">Personal</option>
          <option value="Material">Material</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount (KSH)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;