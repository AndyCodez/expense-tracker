import React from 'react'

function Expenses({ expenses }) {

    const formatAmountInKES = (amount) => {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(amount);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Format the date as "MM/DD/YYYY"
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        return formattedDate;
    };

    return (
        <table className="expenses-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {expenses?.map((expense) => (
                    <tr key={expense._id}>
                        <td>{formatDate(expense.date)}</td>
                        <td>{expense.name}</td>
                        <td>{formatAmountInKES(expense.amount)}</td>
                        <td>{expense.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Expenses
