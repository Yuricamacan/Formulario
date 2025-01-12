import styled from "styled-components";
import Campos from "../campos";
import { useState } from "react";

const FormularioContainer = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    width: 80%;
    padding: 20px 40px;
    background-color: ghostwhite;

    hr{
        border-top: 10px dotted gray;
        width: 100%;
        margin: 10px 0;
    }

    button{
        align-self: flex-end;
        padding: 10px 25px;
        font-size: 20px;
    }
`;

function Formulario(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');

    const dados = [{nome,cpf,email,data}];

    return(
        <FormularioContainer onSubmit={(e)=>{
            e.preventDefault();
            console.log(dados);
            
            alert(`
                    Nome: ${nome}
                    CPF: ${cpf}
                    E-mail: ${email}
                    Data: ${data}
                `)
            
        }}>
            <h1>Login</h1>
            <hr />
            <h2>Preencha os campos a baixo</h2>
            <Campos nome='nome' id='nome' tipo='text' valor={nome} setValor={setNome}/>
            <Campos nome='CPF' id='cpf' tipo='text' valor={cpf} setValor={setCpf}/>
            <Campos nome='E-mail' id='email' tipo='email' valor={email} setValor={setEmail} />
            <Campos nome='Data' id='data' tipo='date' valor={data} setValor={setData} />

            <button>Enviar</button>
        </FormularioContainer>
    )
}

export default Formulario;