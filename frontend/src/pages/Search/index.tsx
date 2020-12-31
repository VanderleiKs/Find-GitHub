import axios from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Button from '../../core/componentes/Button';
import ImageLoader from '../../core/componentes/ImageLoader';
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
    html_url: string;
}

const Search = () => {
    const [dataForm, setDataForm] = useState('');
    const [dataResponse, setDataResponse] = useState<searchGitHub>();
    const [testSearch, setTestSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            setTestSearch(true);
            setIsLoading(true);
            axios(`https://api.github.com/users/${dataForm}`)
                .then(response => setDataResponse(response.data))
                .finally(() => 
                    setIsLoading(false)  
                );    
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
            {testSearch &&
                <div className="find-base-search">
                    {isLoading ?
                        <ImageLoader /> :
                        <>
                            <div>
                                <img className="image" src={dataResponse?.avatar_url} alt={dataResponse?.login} />
                                <a href={dataResponse?.html_url}><Button name="Ver perfil" /></a>
                            </div>

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
                                    <p className="card-large-text"><b>Membro desde:&nbsp;</b>
                                        {dayjs(dataResponse?.created_at).format('DD/MM/YYYY')}</p>
                                </div>
                            </div>
                        </>
                    }
                </div>
            }

        </div>

    );
}

export default Search;