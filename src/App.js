import React from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  // 지출 항목 객체 배열
  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23)
    },
    {
      title: 'BBQ치킨',
      price: 20200,
      date: new Date(2022, 5 - 1, 21)
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 14)
    },
  ];

  console.log('App 실행');

  return (
    <>
      <NewExpense />
      <ExpenseList items={expenses} />
    </>
  );
};

export default App;
