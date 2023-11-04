import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://github.com/rodfrutuoso" target="_blank">Github @rodfrutuoso</a>
          </li>
          <li>
            <a href="https://github.com/rodfrutuoso" target="_blank">Github @rodfrutuoso</a>
          </li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="Expres"/>
        <Tag title="Nodejs"/>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}

