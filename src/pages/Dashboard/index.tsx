import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const img = "https://avatars.githubusercontent.com/u/65419756?s=460&u=72a0b82ce5d7570bcb74c8656eb589b28c05c7a1&v=4";
  return (
    <>
      <img src={logoImg} alt="Github explorer"/>
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src={img} alt="Tiago Gonçalves"/>
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src={img} alt="Tiago Gonçalves"/>
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src={img} alt="Tiago Gonçalves"/>
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;