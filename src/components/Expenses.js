import React from 'react'

function Expenses({ expenses }) {
    return (
        <table>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Expenses
