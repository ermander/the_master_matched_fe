import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class BookmakersFilter extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.noShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Seleziona Bookmakers</Modal.Title>
                    </Modal.Header>
                </Modal>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </>
        );
    }
}

export default BookmakersFilter;