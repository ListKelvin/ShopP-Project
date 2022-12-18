import { Button } from "@mui/material"

export function PlusMinusAmount() {
    return (
        <div style={{
            display: "flex",
            width: "20px;"
        }}>
            <Button>-</Button>
            <input>1</input>
            <Button>+</Button>
        </div>
    )
}