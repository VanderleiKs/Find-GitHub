import React, { useState } from 'react';
import './styles.scss';

const Find = () => {
    const [dataForm, setDataForm] = useState('');

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm(event.target.value);

        console.log(dataForm);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                    <button className="btn btn-primary find-button" type="submit">Encontrar</button>
                </form>
            </div>

        </div>

    );
}

export default Find;