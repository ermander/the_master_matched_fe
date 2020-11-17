import React, { Component } from 'react';
import OddsMatcherMatchModal from "./OddsMatcherMatchModal"
import { MDBIcon } from "mdbreact"

class OpenMatchModalButton extends Component {

    state = {
        show: false
    }

    noShow = () => {
        this.setState({
            show: false,
            bancata: "",
            puntata: "",
            risk: "",
            
        })
    }

    show = () => {
        this.setState({show: true})
    }

    render() {
        return (
            <>  
                <OddsMatcherMatchModal 
                    show={this.state.show}
                    noShow={this.noShow}
                    odd={this.props.odd}
                />
                <MDBIcon icon="calculator" onClick={this.show} />
            </>
        );
    }
}

export default OpenMatchModalButton;