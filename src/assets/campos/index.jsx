import styled from "styled-components";

const CamposContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px 25px;
    border: 1px solid gray;
    border-radius: 50px;
    position: relative;

    margin: 20px 0;

    label{
        position: absolute;
        transform: translateY(-50%);
        top: 50%;

        background-color: ghostwhite;
        padding: 0 80px 0 0;

        font: 600 20px Arial;
        text-transform: capitalize;
        border-radius: 10px;
        transition: all .3s;
    }

    input{
        outline: none;
        border: none;
        font: 400 20px Arial;

        background: transparent;
    }

    input:focus ~label,
    input:valid ~label{
        top: 0;
        font-size: 16px;
        padding: 0 10px;
        background-color: ghostwhite;
    }

    
`

function Campos({tipo, id, nome, valor, setValor}){
    return(
        <CamposContainer>
            <input type={tipo} id={id} required value={valor} onChange={e=>{setValor(e.target.value)}}/>
            <label htmlFor={id}>{nome}</label>
        </CamposContainer>
    )
}

export default Campos;