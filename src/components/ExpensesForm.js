import React, { useState } from 'react';
import axios from '../api/axios';
import { categories } from '../constants/data';

function ExpensesForm() {
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { date, name, amount, category };

        try {
            const createdExpense = await axios.post('/api/expenses',
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                });

            console.log(`Successfully created expense: ${createdExpense._id}`);
            // Refresh the page after successful submission
            window.location.reload();
        } catch (error) {
            console.error(error);
        }

        // Reset form fields after submission
        setDate('');
        setAmount('');
        setName('');
        setCategory('');
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpensesForm;
