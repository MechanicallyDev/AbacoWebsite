import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item"></div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Páginas</h3>
                <ul>
                  <li>
                    <a href="/">Inicial</a>
                  </li>
                  <li>
                    <a href="portfolio">Portfólio</a>
                  </li>
                  <li>
                    <a href="produtos">Produtos</a>
                  </li>
                  <li>
                    <a href="contato">Contato</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>
                  Ábaco Produções de Vídeos Animados
                  <br />
                </h3>
                <p>
                  <strong>Endereço:</strong>
                  <br />
                  Rua: 25 de agosto 1335,&nbsp; &nbsp;Blumenau -SC
                  <br />
                  Whatsapp: (47) 99181-1707
                  <br />
                  <strong>Horário:&nbsp;</strong>
                  <br />
                  Segunda–Sexta: 8:00 às 18:00
                  <br />
                  Sábados: 9:00 ás 18:00
                  <br />
                </p>
              </div>
              <div className="col item social">
                <a
                  href="https://api.whatsapp.com/send?phone=5547991811707"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="icon ion-social-whatsapp"></i>
                </a>
                <a
                  href="https://www.facebook.com/Abaco.Marketing/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/abaco.producoes/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="icon ion-social-instagram-outline"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQ6sPfK47vZpuOZ1Ww_D0pA/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon ion-social-youtube"></i>
                </a>
                <a href="mailto:contato@abaco.ppg.br">
                  <i className="icon ion-email"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className="py-5 bg-black">
        <div className="container">
          <p className="text-center text-white m-0 small">
            Copyright © Ábaco 2020
          </p>
        </div>
      </footer>
    </>
  );
}
