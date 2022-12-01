import { DownloadTd, ShopPAppStyle, TableTitle, DownloadApp, QRStyle, DownLoadStyle } from "./StyleFooter";
import QRCode from "../../../assets/PaymentLogictics/default-preview-qr.svg";
import AppleStore from "../../../assets/PaymentLogictics/Download_on_the_App_Store_Badge.svg.png";
import GooglePlay from "../../../assets/PaymentLogictics/tải xuống.png";
const ShopPApp = () => {
    return(
        <ShopPAppStyle>
            <thead>
                    <tr>
                    <TableTitle colSpan="2">SHOPP APP DOWNLOAD</TableTitle>
                    </tr>
            </thead>
            <DownLoadStyle>
            <td>
                <DownloadTd><QRStyle src = {QRCode} alt = ""/></DownloadTd>                
            </td>
            <td >
                <tr>
                <DownloadTd><DownloadApp src = {AppleStore} alt = ""/></DownloadTd>
                </tr>
                <tr>
                <DownloadTd><DownloadApp src = {GooglePlay} alt = "" style = {{borderRadius: "3px"}}/></DownloadTd>
                </tr>
            </td>
            </DownLoadStyle>
        </ShopPAppStyle>
    )
};

export default ShopPApp;