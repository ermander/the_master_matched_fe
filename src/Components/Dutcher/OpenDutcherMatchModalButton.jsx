import React, { Component } from 'react';
import DutcherMatchModal from "./DutcherMatchModal"
import { MDBIcon } from "mdbreact"

class OpenDutcherMatchModalButton extends Component {

    state = {
        show: false
    }

    noShow = () => {
        this.setState({
            show: false,
            bancata: "",
            
        })
    }

    show = () => {
        this.setState({show: true})
    }

    render() {
        return (
            <>  
                <DutcherMatchModal 
                    show={this.state.show}
                    noShow={this.noShow}
                    odd={this.props.odd}
                />
                <MDBIcon icon="calculator" onClick={this.show} />
            </>
        );
    }
}

export default OpenDutcherMatchModalButton;