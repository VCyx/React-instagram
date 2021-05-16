import Style from './Style.scss'
import React, {useState} from 'react';


const Modal = ({activeModal, setActiveModal, children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cardId, setCardId] = useState(null)

    return (
        <div className={activeModal ? 'cont-modal active' : 'cont-modal'} onClick={()=>setActiveModal(false)}>
        <div className={activeModal ? 'modal active' : 'modal'} onClick={e=>e.stopPropagation()}>
            <div className='close-modal' onClick={()=>setActiveModal(false)}>
            </div>
            {children}
        </div>
        </div>
    );
};

export default Modal;