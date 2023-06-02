import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export function Form( {setTransactionList} ){
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    
    function addTransactionToList(){
        const newTransaction = {id: uuidv4(),description, value, type}
        setTransactionList((transactionList) => [... transactionList, newTransaction])
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }
    
    function submit(event){
        event.preventDefault()
        
        addTransactionToList()
        setDescription("")
        setValue("")
        setType("")
    }

    return(
        <form onSubmit={submit}>
            <label>Descrição</label>
            <input 
                type="text" 
                placeholder="Digite aqui sua descrição" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
            />
            <p>Ex: Compra de roupas</p>

            <label>Valor(R$)</label>
            <input 
                type="number" 
                placeholder="Digite aqui o valor desejado"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required
            />
            <select onChange={handleTypeChange} name="" id="" required>
                <option value="">Selecione tipo da transação</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>

            <button type="submit">Inserir Valor</button>
        </form>
    )
}