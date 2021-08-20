import { Dropdown } from "./Dropdown";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const title = 'Selecione um item';
const options = ['Mamão', 'Uva', 'Laranja'];

describe('Dropdown', () => {

    // 1. Dropdown deve inicar fechad
    it('Should start closed', () => {
        render(<Dropdown title={title} options={options} onSelect={() => { }} />);


        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });

    // 2. Dropdown deve mostrar as opções quando for clicado
    it('Should show options when open', () => {
        render(<Dropdown title={title} options={options} onSelect={() => { }} />);

        // Check if starting closed
        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();

        const dropdownButton = screen.getByRole('button', { name: title });


        userEvent.click(dropdownButton);

        expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();
    });

    // 3. Quando selecinar um item do menu, fechar o dropdown e indicar qual opção foi selecionada
    it('Should signal an option was selected and close the dropdown', () => {
        const onSelect = jest.fn();
        render(<Dropdown title={title} options={options} onSelect={onSelect} />);

        const dropdownButton = screen.getByRole('button', { name: title });

        userEvent.click(dropdownButton);

        // Check if list is open before select an item
        const option0 = screen.getByRole('menuitem', { name: options[0] });
        const option1 = screen.getByRole('menuitem', { name: options[1] });
        const option2 = screen.getByRole('menuitem', { name: options[2] });

        expect(option0).toBeInTheDocument();
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();

        userEvent.click(option1);

        expect(onSelect).toHaveBeenLastCalledWith(options[1]);

        // Check if list is closed after select  an menu item
        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });
});