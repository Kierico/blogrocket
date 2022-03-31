import { Header } from "../components/Header/Header";

import arrowRightImg from "../assets/images/arrow-right.svg";
import featuredImg from "../assets/images/featured-image.png";

import "./blog.scss";

export function Blog() {
    return (
        <section className="section-content">
            <Header />
            <div className="container">
                <article>
                    <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda, repudiandae delectus quaerat laudantium deleniti saepe distinctio provident architecto perferendis corrupti temporibus dolorum doloribus.</p>
                    <button>Veja mais<img src={arrowRightImg} alt="Imagem veja mais" /></button>
                </article>
                <figure>
                    <img src={featuredImg} alt="Imagem featured do banner" />
                </figure>
            </div>
        </section>
    );
}