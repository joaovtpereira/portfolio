import React from 'react';

import fotoPessoal from '../../assets/img/profile.jpg'


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" target="_blank" href="https://www.linkedin.com/in/joaovtpereira/">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={fotoPessoal} alt="João Vitor Pereira" /></span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#about">Sobre</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#experience">Experiência</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#education">Educação</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#interests">Interesses</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger pt-event-none" href="#awards">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;