import { Header } from "../components/Header/Header";
import { SectionPostOne } from "../components/SectionPostOne/SectionPostOne";

import arrowRightImg from "../assets/images/arrow-right.svg";
import featuredImg from "../assets/images/featured-image.png";

import "./blog.scss";
import { CardsSection } from "../components/CardsSection/CardsSection";

export function Blog() {
    return (
        <>
            <section className="section-one">
                <Header />
                <div className="container">
                    <article>
                        <h2>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda, repudiandae delectus quaerat laudantium deleniti saepe distinctio provident architecto perferendis corrupti temporibus dolorum doloribus.</p>
                        <a href="./">
                            <button>Veja mais
                                <img src={arrowRightImg} alt="Imagem veja mais" />
                            </button>
                        </a>
                    </article>
                    <figure>
                        <img src={featuredImg} alt="Imagem featured do banner" />
                    </figure>
                </div>
            </section>
            <section className="main-section">
                <SectionPostOne />
            </section>
            <section className="card-section">
                <div>
                    <CardsSection />
                </div>
            </section>
        </>
    );
}