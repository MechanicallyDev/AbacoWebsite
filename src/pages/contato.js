/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contato() {
  let [name,setName] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [message,setMessage] = React.useState('');

  return (
    <>
      <NavBar />
      <div className="contact-clean">
        <form action="https://formspree.io/f/xqkgedel" method="post">
          <h2 className="text-center">Entre em contato</h2>
          <div className="form-group">
            <input
              className={`form-control ${name==="" && 'is-invalid'}`}
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {name==="" && (
              <small className="form-text text-danger">
                Preencha seu nome
              </small>
            )}
          </div>
          <div className="form-group">
            <input
              className={`form-control ${email==="" && 'is-invalid'}`}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {email==="" && (
              <small className="form-text text-danger">
                Preencha um endereço de e-mail válido
              </small>
            )}
          </div>
          <div className="form-group">
            <textarea
              className={`form-control ${message==="" && 'is-invalid'}`}
              name="message"
              placeholder="Mensagem"
              rows="14"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            {message==="" && (
              <small className="form-text text-danger">
                Por favor preencha sua mensagem
              </small>
            )}
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: '100%', marginTop: 0 }}
            >
              Enviar
            </button>
            <div
              className="col item social"
              style={{ marginTop: '24px', textAlign: 'center' }}
            >
              <h3>Prefere outra forma?</h3>
              <div
                className="container item social"
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(10px, 4vw, 30px)',
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5547991811707"
                  target="_blank"
                >
                  <i
                    className="icon ion-social-whatsapp"
                    style={{
                      color: 'rgb(40, 45, 50)',
                      marginRight: '6px',
                      marginLeft: '6px',
                    }}
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/Abaco.Marketing/"
                  target="_blank"
                >
                  <i
                    className="icon ion-social-facebook"
                    style={{
                      color: 'rgb(40, 45, 50)',
                      marginRight: '6px',
                      marginLeft: '6px',
                    }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/abaco.producoes/"
                  target="_blank"
                >
                  <i
                    className="icon ion-social-instagram-outline"
                    style={{
                      color: 'rgb(40, 45, 50)',
                      marginRight: '6px',
                      marginLeft: '6px',
                    }}
                  ></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQ6sPfK47vZpuOZ1Ww_D0pA/"
                  target="_blank"
                >
                  <i
                    className="icon ion-social-youtube"
                    style={{
                      color: 'rgb(40, 45, 50)',
                      marginRight: '6px',
                      marginLeft: '6px',
                    }}
                  ></i>
                </a>
                <a href="mailto:contato@abaco.ppg.br">
                  <i
                    className="icon ion-email"
                    style={{
                      color: 'rgb(40, 45, 50)',
                      marginLeft: '6px',
                      marginRight: '6px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
