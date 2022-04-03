import { Card } from "../Card/Card"

import post1Img from "../../assets/images/post-1.png";

import "../../components/SectionPostOne/sectionPostOne.scss";

export function SectionPostOne() {
    return (
        <div className="main-postOne">
            <article>
                <Card src={post1Img} title="Começando no ReactJS em 2022" />
                <div>
                    <Card title="Conheça as principais técnicas para conseguir uma vaga internacional em programação" />
                    <hr />
                    <Card title="Veja a evolução do Front-end na prática" />
                </div>
            </article>
        </div>
    );
}