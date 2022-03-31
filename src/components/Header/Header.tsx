import logoImg from "../../assets/images/logo.svg";
import { Buscar } from "../Buscar/Buscar";

import "./header.scss";

export function Header() {
    return (
        <header>
            <a href="/"><img src={logoImg} alt="Logo" /></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Categorias</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
            </nav>
            <Buscar />
        </header>
    );
}