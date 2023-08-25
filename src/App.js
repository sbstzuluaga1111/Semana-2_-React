import ExpenseItem  from "./components/Expenseltem";

function App() {
  /* const para = document.createElement('p');
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para); */

  const expenses = [
    {id: 1,
      title: 'T-Shirt', 
      amount: 35,
      des: 'A white t-shirt',  
      date: new Date(2123, 5, 25),
      image: 'camisa.jpg'
    },
    {
      id: 2,
      title: 'Wallet', 
      amount: 20,
      des: 'A fancy wallet', 
      date: new Date(2023, 8, 24),
      image: 'cartera.jpg'
    },
    {
      id: 3,
      title: 'Cup', 
      amount: 5,
      des: 'A tea cup',  
      date: new Date(2022, 7, 34),
      image: 'tasa.jpg'
    },
  ];


  return (
    <div>
      <div className="b">
      <h2>E-Commerce in React and SnipCart</h2></div>
      <div className="b">
      <ExpenseItem des={expenses [0].des} title={expenses [0].title} amount={expenses[0].amount} date={expenses[0].date} image={expenses[0].image }></ExpenseItem>
      <ExpenseItem des={expenses [1].des} title={expenses [1].title} amount={expenses[1].amount} date={expenses[1].date} image={expenses[1].image  }></ExpenseItem>
      <ExpenseItem des={expenses [2].des} title={expenses [2].title} amount={expenses[2].amount} date={expenses[2].date} image={expenses[2].image  }></ExpenseItem>
    </div>
    </div>
  );
}

export default App;
