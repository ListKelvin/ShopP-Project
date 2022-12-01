import { TableDesciption, CategoriesTable, TableTitle, FooterTd, LinkStyle } from "./StyleFooter";

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
                <TableDesciption><LinkStyle href = "url">Delicious Food</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Discount</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Balo</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Tea Milk</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Watches</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Self-help Book</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Computer & Accessories</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Home & Living</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Cameras</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Vacuum Bottle</LinkStyle></TableDesciption>
                </FooterTd>
            <FooterTd>
                <TableDesciption><LinkStyle href = "url">Woman Clothes</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Mom & Babies</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Beauty</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Health</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Cabinets, Bookshelves</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Manga Comic</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Grocey</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Men Clothes</LinkStyle></TableDesciption>
                <TableDesciption><LinkStyle href = "url">Sport & Outdoor</LinkStyle></TableDesciption>
            </FooterTd>
            </tbody>
        </CategoriesTable>
    )
};

export default Categories;