import Button from '../button';
import DropDown from '../dropdown';
import { InputText } from '../inputText';
import './form.css';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onSaveCollaborator ({
            name,
            office,
            image,
            team
        });
        setImage('');
        setName('');
        setOffice('');
        setTeam('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <InputText required={true} label="Nome" placeholder="Digite seu nome" value={name} onChange={x => setName(x)}/>
                <br/>
                <InputText required={true} label="Cargo" placeholder="Digite seu cargo" value={office} onChange={x => setOffice(x)}/>
                <br/>
                <InputText label="Imagem" placeholder="Digite o endereço da imagem" value={image} onChange={x => setImage(x)}/>
                <br/>
                <DropDown label="Time" itens={props.teams} value={team} onChange={x => setTeam(x)} required={true}/>
                <br/>
                <div style={{float:"left"}}>
                    <Button>
                        Criar card
                    </Button>
                </div>

            </form>
        </section>
    )
}

export default Form