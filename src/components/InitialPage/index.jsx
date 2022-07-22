import "./style.css";
import logo from "../../assets/img/Nu Kenzie.png";
import pinkDot from "../../assets/img/dotPink.png";
import greenDot from "../../assets/img/dotGreen.png";
import blackDot from "../../assets/img/dotBlack.png";

function InitialPage({ setInitialPage, changePage }) {
  return (
    <>
      <div className="land">
        <div className="welcome">
          <figure className="welcome__fig">
            <img className="welcome__img" src={logo} alt="" />
          </figure>
          <h1 className="land__title">
            Centralize o controle das suas finanças
          </h1>
          <p className="land__paragraph">de forma rápida e segura</p>
          <button onClick={changePage}>Iniciar</button>
        </div>
        <div className="art">
          <div className="circle-external">
            <div className="circle-median">
              <div className="circle-internal">
                <div className="big-rectangle">
                  <div className="big-rectangle__header">
                    <img
                      className="big-rectangle__img-dot"
                      src={pinkDot}
                      alt="pink-dot"
                    />
                    <img
                      className="big-rectangle__img-dot"
                      src={greenDot}
                      alt="green-dot"
                    />
                    <img
                      className="big-rectangle__img-dot"
                      src={blackDot}
                      alt="black-dot"
                    />
                  </div>
                  <div className="big-rectangle__svgs">
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                    <svg
                      width="206"
                      height="36"
                      viewBox="0 0 206 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="206"
                        height="36"
                        rx="1.81069"
                        fill="#F3F3F3"
                      />
                    </svg>
                  </div>
                  <div className="green-rectangle">
                    <div className="green-rectangle__div-left">
                      <div className="green-rectangle__green-square"></div>
                      <div className="green-rectangle__svg1"></div>
                      <div className="green-rectangle__svg2"></div>
                    </div>
                    <div className="green-rectangle__div-rigth"></div>
                  </div>
                  <div className="pink-rectangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InitialPage;
