import React from "react";

import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

const START_BALANCE = 10000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;

const SALARY_AMOUNT = 1000;
const BOOK_PRICE = 550;
const FOOD_PRICE = 50;

export default function App() {
  const [balance, setBalance] = React.useState(START_BALANCE);
  const getMoney = () => setBalance(balance + GET_MONEY);

  useEffect(() => {
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
  }, [balance]);

  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);
    setPayment([
      {
        name: "Зарплата",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };

  const buyBook = () => {
    setBalance(balance - BOOK_PRICE);
    setPayment([
      {
        name: "Купівля книги",
        amount: BOOK_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  const buyFood = () => {
    setBalance(balance - BOOK_PRICE);
    setPayment([
      {
        name: "Купити їжу",
        amount: FOOD_PRICE,
        type: "* "
      },
      ...payment
    ]);
  };

  const HelloWorld = () => alert("Hello world!");

  return (
    <Page>
      <Header name="BANK" onClick={HelloWorld} />
      <Balance balance={balance} />
      <Menu
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/get.svg"
          },
          {
            name: "Отримати зарплату",
            onClick: getSalary,
            img: "/icon/cat.svg"
          },
          {
            name: "Купити Книгу",
            onClick: buyBook,
            img: "/icon/dog.svg"
          },
          {
            name: "Купити їжу в Glovo",
            onClick: buyFood,
            img: "/icon/apple.svg"
          },
        ]}
      />
      <Payment payment={payment} />
    </Page>
  );
}
