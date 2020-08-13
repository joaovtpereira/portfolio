import React from 'react';

import NavBar from '../../components/navBar';

function Home() {

  return (
    <>
      <NavBar />
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            João Vitor
                        <span class="text-primary"> Pereira</span>
          </h1>
          <div class="subheading mb-5">
            Uberlândia - MG · (34) 99268-6802 ·
            <a href="mailto:name@email.com">joaovitorpessoal2@gmail.com</a>
          </div>
          <p class="lead mb-5">
          Sou um desenvolvedor front-end apaixonado por desenvolvimento de aplicações web e mobile, desejando poder vivenciar e contribuir com projetos, visando sempre as boas práticas e a experiência do usuário. 
          </p>
          <div class="social-icons">
            <a class="social-icon" target="_blank" href="https://www.linkedin.com/in/joaovtpereira/"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" target="_blank" href="https://github.com/JoaoVitorPereiraUFU"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;