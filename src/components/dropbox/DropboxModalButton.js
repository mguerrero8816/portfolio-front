import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is important for screen readers

const DropboxModal = ({ isOpen, onRequestClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="My Modal"
			style={{
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
				},
			}}
		>
			<h2>Hello, I'm a Modal!</h2>
			<button onClick={onRequestClose}>Close</button>
		</Modal>
	);
};

const DropboxModalButton = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<li className="nav-item">
			<a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Dropbox</a>
			<DropboxModal isOpen={modalIsOpen} onRequestClose={closeModal} />
		</li>

	);
};

export default DropboxModalButton;

export {DropboxModal}