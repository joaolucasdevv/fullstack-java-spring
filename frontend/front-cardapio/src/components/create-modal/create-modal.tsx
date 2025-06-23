interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: string | number): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}


export function CreateModalProps() {
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no Cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={} updateValue={}/>
                    <Input label="price" value={} updateValue={}/>
                    <Input label="image" value={} updateValue={}/>
                </form>
            </div>
        </div>
    )
}