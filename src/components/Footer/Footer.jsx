import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2C3E50', color: '#ffffff', padding: '100px 0', position: 'relative', bottom: '0', width: '100%' }}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 style={{ marginBottom: '20px' }}>Location</h5>
                        <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 style={{ marginBottom: '20px' }}>Around The Web</h5>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <a href="#" className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-outline-light btn-social"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="btn btn-outline-light btn-social"><i className="fas fa-globe"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 style={{ marginBottom: '20px' }}>About Freelancer</h5>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#1A252F', padding: '20px 0', position: 'absolute', bottom: '0', width: '100%' }} className="text-center">
                <small>Copyright &copy; Your Website 2021</small>
            </div>
        </footer>
    );
}

export default Footer;
