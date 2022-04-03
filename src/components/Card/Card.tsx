import { ImgHTMLAttributes } from "react";

import "./card.scss";

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

export function Card({ src, title }: ImgProps) {
    return (
        <figure>
            {src && <img src={src} alt="Imagem do poste 1" />}
            <figcaption>Janeiro 04, 2022</figcaption>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi cupiditate quos at impedit sunt eum. Tenetur eveniet illum ipsa, labore voluptatum eaque sapiente quibusdam. Esse porro iste quo nulla.</p>
        </figure>
    );
}