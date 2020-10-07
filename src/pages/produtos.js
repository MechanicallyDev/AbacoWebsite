import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Produtos() {
  return (
    <>
      <NavBar />
      <section style={{ marginTop: '48px' }}>
        <div className="container">
          <section
            className="pricing-table"
            style={{ paddingBottom: '0px', paddingTop: '70px' }}
          >
            <div className="container">
              <div className="center" style={{ paddingBottom: '24px' }}>
                <h2>Produtos</h2>
                <p className="lead">
                  A nossa proposta é oferecer produções de vídeos curtos e
                  animados para serem utilizados em propagandas nas redes
                  sociais.
                  <br />
                  Oferecemos projetos adequados para pequenas empresas,
                  profissionais liberais e outras instituições.
                  <br />
                </p>
              </div>
              <div className="pricing-area text-center">
                <div className="row">
                  <div className="col-sm-4 plan price red wow fadeInDown">
                    <ul className="list-group">
                      <li className="list-group-item heading">
                        <h1>Básico</h1>
                        <span className="price">R$270,00</span>
                      </li>
                      <li className="list-group-item">
                        <span>30 Segundos de duração</span>
                      </li>
                      <li className="list-group-item">
                        <span>Qualidade FullHD</span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          Trilha Sonora
                          <br />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>Locução Profissional</span>
                      </li>
                      <li className="list-group-item">
                        <span>2 Revisões</span>
                      </li>
                      <li className="list-group-item">
                        <span>Entrega em até 5 dias</span>
                      </li>
                      <li className="list-group-item plan-action">
                        <Link className="btn" to="/contato">
                          Contrate
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4 plan price green wow fadeInDown">
                    <ul className="list-group">
                      <li className="list-group-item heading">
                        <h1>Padrão</h1>
                        <span className="price">R$370,00</span>
                      </li>
                      <li className="list-group-item">
                        <span>60 Segundos de duração</span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          Qualidade FullHD
                          <br />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          Trilha Sonora
                          <br />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>Locução Profissional</span>
                      </li>
                      <li className="list-group-item">
                        <span>3 Revisões</span>
                      </li>
                      <li className="list-group-item">
                        <span>Entrega em até 8 dias</span>
                      </li>
                      <li className="list-group-item plan-action">
                        <Link className="btn" to="/contato">
                          Contrate
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4 plan price yellow wow fadeInDown">
                    <ul className="list-group">
                      <li className="list-group-item heading">
                        <h1>Premium </h1>
                        <span className="price">R$552,00</span>
                      </li>
                      <li className="list-group-item">
                        <span>90 Segundos de duração</span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          Qualidade FullHD
                          <br />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          Trilha Sonora
                          <br />
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>Locução Profissional</span>
                      </li>
                      <li className="list-group-item">
                        <span>4 Revisões</span>
                      </li>
                      <li className="list-group-item">
                        <span>Entrega em até 10 dias</span>
                      </li>
                      <li className="list-group-item plan-action">
                        <Link className="btn" to="/contato">
                          Contrate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <h2
        className="text-center"
        style={{ marginBottom: '96px', marginTop: '48px' }}
      >
        Tem algum projeto com uma necessidade especial?
        <br />
        <Link
          className="btn btn-primary btn-lg"
          role="button"
          to="https://docs.google.com/forms/d/e/1FAIpQLSfOuBlmFAKrGW2qbGrDs-Nili_t-dIkRARvIfvNklAglZhC6Q/viewform?usp=sf_link"
          target="_blank"
          style={{ marginTop: '24px' }}
        >
          Solicite um projeto personalizado
        </Link>
      </h2>
      <Footer />
    </>
  );
}
