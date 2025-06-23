const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={updateValue}></input>
        </>
    )
}

interface CreateModalProps {

}

export function CreateModalProps(props : CreateModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no Cardápio</h2>
                <form className="input-container">

                </form>
            </div>
        </div>
    )
}