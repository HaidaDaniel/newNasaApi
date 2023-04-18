import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'

function GenericModal(props) {

    const { isOpen, onRequestClose, title, children } = props;
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={'custom-modal'}>
            <div className='modal'><div className="modal-header">
                <h2 className="modal-title">{title}</h2>
                <button className='modal-close' onClick={onRequestClose}><CloseIcon /></button>
            </div>
                <div className="modal-body">{children}</div></div>

        </Modal>
    );
}

GenericModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default GenericModal;