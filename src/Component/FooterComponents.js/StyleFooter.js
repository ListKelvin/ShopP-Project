import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
export const FootSocDiv = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 14px;
  ${down("sm")} {
    width: 130px;
  }
`;

export const FootSpan = styled.span`
  font-size: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

export const FootPolicy = styled.div`
  width: 370px;
  font-size: 11px;
  color: #000000;
  display: flex;
  justify-content: space-between;
  ${down("sm")} {
    width: 270px;
    font-size: 8px;
  }
`;

export const FootSocialStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Footer table
export const TableTitle = styled.th`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 9px;
  color: #2f5e5e;
  text-align: left;
  height: 25px;
  ${only("lg")} {
    font-size: 12px;
  }
  ${down("lg")} {
    font-size: 10px;
  }
  ${down("md")} {
    font-size: 8px;
    height: 18px;
  }
  ${down("sm")} {
    font-size: 7px;
  }
`;

export const TableDesciption = styled.tr`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  color: #000000;
  height: 16px;
  width: fit-content;
  ${down("lg")} {
    font-size: 9px;
    line-height: 8px;
    height: 12px;
  }
  ${down("md")} {
    font-size: 9px;
    line-height: 10px;
    height: 8px;
  }
  ${down("sm")} {
    font-size: 8px;
    line-height: 8px;
  }
`;
export const TableStyle = styled.table`
  width: 120px;
`;

export const CategoriesTable = styled.table`
  width: 300px;
  ${down("lg")} {
    width: 250px;
  }
  ${down("md")} {
    width: 200px;
  }
`;

export const PaymentTableStyle = styled.table`
  width: 150px;
  ${down("lg")} {
    width: 100px;
    height: 100px;
  }
`;

export const FooterTd = styled.td`
  vertical-align: top;
`;

export const PaymentTd = styled.td`
  text-align: center;
`;

export const PaymentCard = styled.img`
  height: 33.33px;
  vertical-align: middle;
  ${down("lg")} {
    max-width: 70px;
    height: 20px;
  }
  ${down("md")} {
    height: 15px;
  }
`;

export const PaymentTr = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const DownloadApp = styled(PaymentCard)`
  width: 100%/2;
  height: 20px;
  ${down("md")} {
    height: 15px;
  }
`;

export const QRStyle = styled(PaymentCard)`
  height: 70px;
  border-radius: 3px;
  ${down("lg")} {
    height: 50px;
  }
  ${down("md")} {
    height: 30px;
  }
`;

export const DownloadTd = styled(PaymentTd)`
  width: 70px;
`;

export const FooterDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: top;
  background-color: #b6e3e3;
  border-bottom: 1px solid #55abab;
  border-radius: 5px;
  margin-bottom: 14px;
  padding: 10px;
  ${down("md")} {
    padding: 5px;
  }
  ${down("sm")} {
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  ${down("sm")} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 5px;
    border-bottom: 1px solid #55abab;
  }
`;

export const FooterRow2 = styled(FooterRow1)`
  width: 40%;
  ${down("sm")} {
    flex-direction: row;
    width: 55%;
    justify-content: center;
    border-bottom: none;
  }
`;

export const DownLoadStyle = styled.tbody`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopPAppStyle = styled.table`
  width: 165px;
  ${down("lg")} {
    width: 130px;
  }
`;

export const FooterHomeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // bottom: 20px;
  // position: fixed;
  margin: 20px 0px;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  color: #000000;
`;

export const FooterSocialImage = styled.img`
  width: 20px;
  height: 20px;
`;
