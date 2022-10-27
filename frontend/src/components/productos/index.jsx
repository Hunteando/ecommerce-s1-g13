import React from "react";
import IMG from "../../../images/1.jpg";

export const ProductosLista = () => {
  return (
    //  ↓ esta anotacion (<>) se hace para que el componente NO retorne la clase padre
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {/* producto 1 */}
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1> TITLE </h1>
            <p>Categoria</p>
            <p className="price">$8,00</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>

        {/* producto 2 */}
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1> TITLE </h1>
            <p>Categoria</p>
            <p className="price">$8,00</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        
        {/* producto 3 */}
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1> TITLE </h1>
            <p>Categoria</p>
            <p className="price">$8,00</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
