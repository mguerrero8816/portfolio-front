import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import DropboxAccount from './DropboxAccount'
import DropboxCodeButton from './DropboxCodeButton'

Modal.setAppElement('#root'); // This is important for screen readers

const DropboxModal = ({ isOpen, onRequestClose, dropboxCode }) => {
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
			
			<DropboxCodeButton dropboxCode={dropboxCode}/>
			<DropboxAccount />
			<button onClick={onRequestClose}>Close</button>
		</Modal>
	);
};

const DropboxModalButton = () => {
	const location = useLocation();
	const [modalIsOpenDropbox, setModalIsOpenDropbox] = useState(false);
	const [dropboxCode, setDropboxCode] = useState('')

	const openDropboxModal = () => {
		setModalIsOpenDropbox(true);
	};

	const closeDropboxModal = () => {
		setModalIsOpenDropbox(false);
	};

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const urlCode = params.get('code')
		setDropboxCode(urlCode)
		if (urlCode) {
			openDropboxModal();
		}
	}, [location]);

	return (
		<li className="nav-item">
			<a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); openDropboxModal(); }}>Dropbox</a>
			<DropboxModal isOpen={modalIsOpenDropbox} onRequestClose={closeDropboxModal} dropboxCode={dropboxCode} />
		</li>
	);
}

export default DropboxModalButton;

export {DropboxModal, DropboxModalButton}