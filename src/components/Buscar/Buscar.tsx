import searchImg from "../../assets/images/search.svg";

import "./buscar.scss";

export function Buscar() {
    return (
        <div className="header-search">
            <input type="text" placeholder="Buscar" />
            <button>
                <img src={searchImg} alt="Imagem buscar" />
            </button>
        </div>
    );
}