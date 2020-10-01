import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap"

class OddsMatcherMatchModal extends Component {
    // state = {
    //     show: this.props.show
    // }

    // handleClose = () => { this.setState({ show: false })}

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{JSON.stringify(this.props.odd)}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.noShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.noShow}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default OddsMatcherMatchModal;