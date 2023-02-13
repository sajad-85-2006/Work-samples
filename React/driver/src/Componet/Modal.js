import './Modal.css'

const Modal = ({ show,hide,children,title}) => {


    return (<div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => { hide(); }}>&times;</span>
                <h2>{title}</h2>
            </div>
            <div className="modal-body">
                {children}
            </div>
            <div className="modal-footer">
                <p> </p>
            </div>
        </div>
    </div>)
}

export default Modal;