import styled from "styled-components";

export default function Header({ name, onClick }) {
  return <HeaderTag onClick={onClick}>{name}</HeaderTag>;
}

const HeaderTag = styled.div`
  background: #1e1e1e;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
  padding: 15px;
`;
