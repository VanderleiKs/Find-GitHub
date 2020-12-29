import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../core/componentes/Button';
import './styles.scss';

type searchGitHub = {
    login: string;
    location: string;
    avatar_url: string;
    public_repos: string;
    followers: string;
    following: string;
    company: string;
    created_at: string;
    blog: string;
    
}

const Search = ({ }) => {
    const [dataForm, setDataForm] = useState('');
    const [dataResponse, setDataResponse] = useState<searchGitHub>();
    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios(`https://api.github.com/users/${dataForm}`)
            .then(response => setDataResponse(response.data));
    }

    return (

        <div className="container-find-base">
            <div className="find-base-top">
                <form onSubmit={handleSubmit}>
                    <h1 className="find-title">Encontre um perfil Github</h1>
                    <div className="find-input">
                        <input type="text"
                            className="form-control"
                            placeholder="Usuário Github"
                            onChange={handleForm} />
                    </div>
                    <Button name="Encontrar" />
                </form>
            </div>
            <div className="find-base-search">
                <img className="image" src={dataResponse?.avatar_url} alt={dataResponse?.login} />
                <div className="cards-container">
                    <div className="d-flex">
                        <span className="base-card card-small">Repositórios públicos: {dataResponse?.public_repos}</span>
                        <span className="base-card card-small">Seguidores: {dataResponse?.followers}</span>
                        <span className="base-card card-small">Seguindo: {dataResponse?.following}</span>
                    </div>

                    <div className="base-card card-large">
                        <h3 className="card-large-title">Informações</h3>
                        <p className="card-large-text"><b>Empresa:&nbsp;</b> {dataResponse?.company}</p>
                        <p className="card-large-text"><b>Website/Blog:&nbsp;</b> {dataResponse?.blog}</p>
                        <p className="card-large-text"><b>Localidade:&nbsp;</b> {dataResponse?.location}</p>
                        <p className="card-large-text"><b>Membro desde:&nbsp;</b> {dataResponse?.created_at}</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Search;