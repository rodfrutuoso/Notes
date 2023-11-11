import { Container, Form} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Noteitem } from "../../components/Noteitem";


export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>
          <Section title="Links úteis">
            <Noteitem value="https://github.com/rodfrutuoso"/>
            <Noteitem isNew placeholder="Novo link"/>
          </Section>

        </Form>
      </main>
      
    </Container>
  )
}

