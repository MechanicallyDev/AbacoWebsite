import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar/>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="text-light masthead-heading mb-0">ÁBACO</h1>
            <h2 className="text-light masthead-subheading mb-0">
              Produções de Vídeos Animados
            </h2>
            <Link
              className="btn btn-info btn-xl rounded-pill mt-5"
              role="button"
              to="/contato"
              style = {{
                marginLeft:'12px',
                marginRight:'12px'
              }}
            >
              Entre em Contato
            </Link>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <lottie-player
                  className="img-fluid"
                  src="https://assets6.lottiefiles.com/packages/lf20_DnLK6k.json"
                  background="transparent"
                  speed="1"
                  style = {{
                    width: '100%', 
                    height: 'auto'
                  }}
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">
                  Vídeos curtos e divertidos para redes sociais
                  <br />
                </h2>
                <p>
                  Muitas pesquisas sobre marketing demonstram que vídeos curtos
                  e animados chamam mais atenção do público e fixam por mais
                  tempo na memória a marca dos produtos e serviços.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <lottie-player
                  className="img-fluid"
                  src="https://assets9.lottiefiles.com/packages/lf20_e6MQKr.json"
                  background="transparent"
                  speed="1"
                  style={{width: '100%', height: 'auto'}}
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4">O que te oferecemos?</h2>
                <p>
                  <br />A nossa missão é ajudar nossos clientes vender mais,
                  através de projetos exclusivos de vídeos de propaganda para
                  rede sociais.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <lottie-player
                  className="img-fluid"
                  src="https://assets5.lottiefiles.com/private_files/lf30_DmBoxg.json"
                  background="transparent"
                  speed="1"
                  style={{width: '100%', height: 'auto'}}
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Por que usar?</h2>
                <p>
                  Vídeos curtos e animados prendem mais a atenção do público
                  <br />
                  <br />
                  Imagens, frases, música de fundo e narração&nbsp;tornam a
                  experiência mais agradável
                  <br />
                  <br />A marca fica muito mais tempo gravada na memória
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
