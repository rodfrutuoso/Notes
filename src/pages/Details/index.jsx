import { Container } from "./style";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>opa</h1>
      <h2>teste</h2>

      <Button title = "Entrar" loading/>
      <Button title = "Cadastrar"/>
      <Button title = "Voltar"/>
    </Container>
  )
}

