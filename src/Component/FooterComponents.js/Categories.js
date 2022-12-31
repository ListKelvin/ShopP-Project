import { TableDesciption, CategoriesTable, TableTitle, FooterTd, LinkStyle } from "./StyleFooter";

const CategoriesList1 = [
    {id: 1, name: "Delicious Food"},
    {id: 2, name: "Discount"},
    {id: 3, name: "Balo"},
    {id: 4, name: "Tea Milk"},
    {id: 5, name: "Watches"},
    {id: 6, name: "Self-help Book"},
    {id: 7, name: "Computer & Accessories"},
    {id: 8, name: "Home & Living"},
    {id: 9, name: "Cameras"},
    {id: 10, name: "Vacuum Bottle"},
];
const CategoriesList2 = [
    {id: 1, name: "Woman Clothes"},
    {id: 2, name: "Mom & Babies"},
    {id: 3, name: "Beauty"},
    {id: 4, name: "Health"},
    {id: 5, name: "Cabinets, Bookshelves"},
    {id: 6, name: "Manga Comic"},
    {id: 7, name: "Grocey"},
    {id: 8, name: "Men Clothes"},
    {id: 9, name: "Sport & Outdoor"},
];
const Categories = () => {
    return(
        <CategoriesTable>
            <thead>
                <tr>
                    <TableTitle>CATEGORIES</TableTitle>
                    </tr>
            </thead>
            <tbody >
            <FooterTd>
            {CategoriesList1.map(({id, name}) => {return(
                <TableDesciption key = {id}><LinkStyle href = "url">{name}</LinkStyle></TableDesciption>
                );})}
            </FooterTd>
            <FooterTd>
            {CategoriesList2.map(({id, name}) => {return(
                <TableDesciption key={id}><LinkStyle href = "url">{name}</LinkStyle></TableDesciption>
                );})}
            </FooterTd>
            </tbody>
        </CategoriesTable>
    )
};

export default Categories;