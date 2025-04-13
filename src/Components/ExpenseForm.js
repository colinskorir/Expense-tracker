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
    ) 