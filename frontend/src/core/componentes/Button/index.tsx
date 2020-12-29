import React from 'react';
import './styles.scss';

type Props = {
    name: String;
}

const Button = ({name}: Props) => (
<div>
<button className="button">{name}</button>
</div>

);

export default Button;