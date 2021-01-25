import React from 'react';

{/* todo o Conteudo é children */}
export default function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}