import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const FilterTitle = styled.h2`
  color: #2f5e5e;
`;

export const FilterFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 20%;
  background: #b6e3e3;
  border-radius: 10px;
  padding: 10px;
`;

export const TypeofFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.2s;
  &:hover {
    background: rgba(85, 171, 171, 0.5);
  }
`;

export const NameofFilter = styled.span`
  color: #2f5e5e;
  font-size: 20px;
`;

export const FilterComponent = styled.div`
  padding: 10px;
  border-bottom: 2px solid #55abab;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const SortFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80%;
  background: #b6e3e3;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
`;

export const SortTitle = styled.h2`
  color: #2f5e5e;
`;

export const SortButton = styled.button`
  background: white;
  color: #2f5e5e;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid grey;
  margin-left: 30px;
  font-size: 16px;
  cursor: pointer;
  //   width: 10%;
  transition: all 0.2s;
  &:hover {
    background: #55abab;
    color: white;
    border: 1px solid #55abab;
  }
`;
