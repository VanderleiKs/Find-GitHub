import React from 'react';
import './styles.scss';

const Home = () => (
    <div className="container-home">
        <div className="home-title">
            Desafio do Capítulo 3, <br />  Bootcamp DevSuperior
</div>
        <div className="home-text">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, 
                de Mateusz Wierzbicki: antforfigma@gmail.com      
            </p>
        </div>
        <button className="btn btn-primary home-button">Começar</button>

    </div>

);

export default Home;