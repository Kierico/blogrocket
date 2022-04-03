import { Card } from "../Card/Card";

import post2Img from "../../assets/images/post-2.png";
import post3Img from "../../assets/images/post-3.png";
import post4Img from "../../assets/images/post-4.png";

import "../CardsSection/cardsSection.scss";

export function CardsSection() {
    return (
        <section className="cards-section">
            <div className="cards-container">
                <Card src={post2Img} title="10 dicas para conseguir a vaga desejada" />
                <Card src={post3Img} title="Deixe seu código mais semântico com essas dicas" />
                <Card src={post4Img} title="Use essas dicas nas suas aplicações mobile" />
            </div>
        </section>
    );
}