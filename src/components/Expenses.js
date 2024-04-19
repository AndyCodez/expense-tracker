import React from 'react'

function Expenses({ expenses }) {
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
                        <td>{expense.date}</td>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Expenses
