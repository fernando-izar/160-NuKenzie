import "./style.css";
import logo from "../../assets/img/Nu Kenzie.png";
import pinkDot from "../../assets/img/dotPink.png";
import greenDot from "../../assets/img/dotGreen.png";
import blackDot from "../../assets/img/dotBlack.png";

function InitialPage({ setInitialPage, changePage }) {
  return (
    <div className="all-landpage">
      <div className="land">
        <div className="welcome">
          <figure className="welcome__fig">
            <img className="welcome__img" src={logo} alt="" />
          </figure>
          <h1 className="land__title">
            Centralize o controle das suas finanças
          </h1>
          <p className="land__paragraph">de forma rápida e segura</p>
          <button className="land__button-start" onClick={changePage}>
            Iniciar
          </button>
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
                      <div className="green-rectangle__svg1">
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 22 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.0855 0.94043H2.78932C1.78931 0.94043 0.978638 1.7511 0.978638 2.75112V13.6152C0.978638 14.6153 1.78931 15.4259 2.78932 15.4259H19.0855C20.0855 15.4259 20.8962 14.6153 20.8962 13.6152V2.75112C20.8962 1.7511 20.0855 0.94043 19.0855 0.94043Z"
                            stroke="white"
                            strokeWidth="1.81069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="green-rectangle__svg2">
                        <svg
                          width="22"
                          height="3"
                          viewBox="0 0 22 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.978638 1.37256H20.8962"
                            stroke="white"
                            strokeWidth="1.81069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="green-rectangle__div-rigth">
                      <svg
                        width="154"
                        height="12"
                        viewBox="0 0 154 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.640808"
                          y="0.398071"
                          width="152.738"
                          height="11.3883"
                          rx="1.33981"
                          fill="#66C085"
                          fillOpacity="0.11"
                        />
                      </svg>
                      <svg
                        width="40"
                        height="12"
                        viewBox="0 0 40 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.640808"
                          y="0.155396"
                          width="38.8544"
                          height="11.3883"
                          rx="1.33981"
                          fill="#66C085"
                          fillOpacity="0.11"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pink-rectangle">
                    <div className="pink-rectangle__div-left">
                      <div className="pink-rectangle__pink-square"></div>
                      <div className="pink-rectangle__svg1">
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 22 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.0855 0.94043H2.78932C1.78931 0.94043 0.978638 1.7511 0.978638 2.75112V13.6152C0.978638 14.6153 1.78931 15.4259 2.78932 15.4259H19.0855C20.0855 15.4259 20.8962 14.6153 20.8962 13.6152V2.75112C20.8962 1.7511 20.0855 0.94043 19.0855 0.94043Z"
                            stroke="white"
                            strokeWidth="1.81069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="pink-rectangle__svg2">
                        <svg
                          width="22"
                          height="3"
                          viewBox="0 0 22 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.978638 1.37256H20.8962"
                            stroke="white"
                            strokeWidth="1.81069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="pink-rectangle__div-rigth">
                      <svg
                        width="207"
                        height="16"
                        viewBox="0 0 213 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.488525"
                          y="0.212219"
                          width="206.418"
                          height="15.3908"
                          rx="1.81069"
                          fill="#FCEFFA"
                        />
                      </svg>
                      <svg
                        width="53"
                        height="16"
                        viewBox="0 0 53 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.488525"
                          y="0.561768"
                          width="52.5099"
                          height="15.3908"
                          rx="1.81069"
                          fill="#FCEFFA"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
