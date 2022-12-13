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
  cursor: pointer;
`;

export const NameofFilter = styled.span`
  color: #2f5e5e;
  font-size: 20px;
`;

export const FilterComponent = styled.div`
  padding: 10px;
  border-bottom: 2px solid #55abab;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(85, 171, 171, 0.5);
  }
`;

export const SortFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  background: #b6e3e3;
  border-radius: 10px;
  padding: 10px;
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

export const CollapsedAccordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  max-height: ${(props) => {
    return props.isOpen ? "250px" : "0px";
  }};

  overflow: hidden;
  transition: all 0.2s;
`;
export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterCategory = styled.button`
  border: none;
  width: 100%;
  background-color: transparent;
  text-transform: capitalize;
  cursor: pointer;
  text-align: left;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding: 10px 20px;
  line-height: 16px;
  transition: all 0.2s;
  &:hover {
    color: #2f5e5e;
    background: rgba(85, 171, 171, 0.5);
  }
`;

export const WrapperFlexColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 40px;
`;
