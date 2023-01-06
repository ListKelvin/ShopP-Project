import styled from "styled-components";
export const ShopWrapper = styled.div`
  min-width: 420px;
  position: absolute;
  //   height: 500px;
  top: 40px;
  height: 300px;
  right: 50px;
  background: #fff;
  z-index: 1000;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  overflow: hidden;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  padding: 10px;
  gap: 10px;
  margin-top: 1rem;
`;
