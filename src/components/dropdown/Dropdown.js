/**
 * 1. Dropdown deve inicar fechado
 * 2. Dropdown deve mostrar as opções quando for clicado
 * 3. Quando selecinar um item do menu, fechar o dropdown e indicar qual opção foi selecionada
 */

import './Dropdown.css';
import React from 'react';

export const Dropdown = ({ title, options, onSelect }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelection = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(true)}>{title}</button>

            {isOpen && (
                <ul role="menu">
                    {options.map((option) => (
                        <li
                            key={option}
                            role="menuitem"
                            onClick={() => handleSelection(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}