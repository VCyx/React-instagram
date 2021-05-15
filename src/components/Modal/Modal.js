import Style from './Style.scss'
import React, {useState} from 'react';


const Modal = ({picture, user, posts}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cardId, setCardId] = useState(null)


    const showModal = (id) => {
        setCardId(id)
        if (isModalOpen===false) {
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
    };
    const onClose = e => {
        if (e.target.className !==
            'modal' && 'modal-box-title' && 'modal-box-btn'
        ) {
            showModal()
        }
    }


    return (
        <div className='modal'>
            <div className='modal-picture'>
                {picture}
            </div>
            <div className='modal-msg'>

                <div className='modal-msg-user'>{user}user
                <hr className='modal-msg-hr'></hr>
                </div>
                <div className='modal-msg-posts'>{posts}posts</div>
                <div className='modal-msg-comments'>comments</div>
            </div>
        </div>
    );
};

export default Modal;