import { Container, Profile } from "./styles";

export function Header() {

    return (
        <Container >
            <Profile>
                <img src="https://github.com/rodfrutuoso.png"
                    alt="Foto do Usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Rodrigo Frutuoso</strong>
                </div>
            </Profile>


        </Container>
    )
}