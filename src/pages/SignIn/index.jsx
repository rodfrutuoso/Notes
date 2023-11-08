import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para gerenciar e salvar notas e links</p>
        <h2>Faça seu Login</h2>
        <Input
          Placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          Placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Entrar"/>

        <a href="#">
          Criar Conta
        </a>
      </Form>
    </Container>
  );
}