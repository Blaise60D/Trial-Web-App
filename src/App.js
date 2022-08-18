import React, { useState } from 'react';

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const my_data= [
  {
    id: "e1",
    title: "Imbaho",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Amazi",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Umuriro",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Ameza",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
	const [
		expenses,
		setExpenses
	] = useState(my_data);

  const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [
				expense,
				...prevExpenses
			];
		});
	};

  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
