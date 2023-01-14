import styled, { css } from "styled-components";

export default function Payment({ payment }) {
  if (payment.length === 0) {
    return (
      <PaymentList>
        <Empty>Немає транзакцій</Empty>
      </PaymentList>
    );
  }
  return <PaymentList>{payment.map(PaymentItem)}</PaymentList>;
}

function PaymentItem({ name, amount, type }) {
  return (
    <PaymentBlock>
      <PaymentIcon>
        <img src="/icon/payment.svg" width="30px" height="30px" />
      </PaymentIcon>
      <PaymentText>Транзакція: {name}</PaymentText>
      <PaymentAmount type={type}>
        {type} {amount} грн.
      </PaymentAmount>
    </PaymentBlock>
  );
}

// дизайн для тексту "Немає транзакцій"
const Empty = styled.div`
  font-size: 16px;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentAmount = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ type }) => {
    if (type === "+")
      return css`
        color: green;
      `;

    if (type === "-")
      return css`
        color: red;
      `;

    if (type === "* ")
      return css`
        color: blue;
      `;

    return css`
      color: #fff;
    `;
  }};
`;

const PaymentIcon = styled.div`
  background: linear-gradient(90deg, #51545b 0%, #767a85 90.71%);
  min-width: 60px;
  min-height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentText = styled.div`
  font-size: 18px;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PaymentList = styled.div`
  background: #1e1e1e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  min-height: 120px;
  display: grid;
  gap: 24px;
`;

const PaymentBlock = styled.div`
  display: grid;
  grid-template-columns: 60px 4fr 1fr;
  gap: 0px 20px;
  width: 100%;
`;
