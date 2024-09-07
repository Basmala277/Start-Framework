import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Portofolio.css';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleShowModal = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const portfolioItems = [
        { id: 1, img: '/image/home2.png' },
        { id: 2, img: '/image/pizza.png' },
        { id: 3, img: '/image/home.png' },
        { id: 4, img: '/image/home2.png' },
        { id: 5, img: '/image/pizza.png' },
        { id: 6, img: '/image/home.png' }
    ];

    return (
        <div className="container text-center my-5">
            <h2 className="text-uppercase">Portfolio Component</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row">
                {portfolioItems.map(item => (
                    <div key={item.id} className="col-md-4 mb-5">
                        <div 
                            className="portfolio-item mx-auto" 
                            onClick={() => handleShowModal(item.img)}
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                cursor: 'pointer',
                                height: '300px',
                                borderRadius: '10px'
                            }}
                        >
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    <img src={modalImage} alt="Portfolio Item" className="img-fluid" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Portfolio;
