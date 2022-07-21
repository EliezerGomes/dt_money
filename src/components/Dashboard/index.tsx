import { Summary } from "../Summary";
import { TransictionTable } from "../TransictionsTable";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransictionTable/>
        </Container>
    )
}