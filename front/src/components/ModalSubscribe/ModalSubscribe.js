import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ModalSubscribe.scss';
import { closeModal } from '../../actions/subscribe'


class ModalSubscribe extends Component {


    render() {

        const { isModalOpen, subscriber, loading } = this.props.subscribe;
        const closeModal = this.props.closeModal;

        return (
            <Fragment>
                <div className="container">

                    <div className={`modal fade ${isModalOpen ? 'show modal-styleoptions' : ''}`} id="myModal">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">{subscriber.message}</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    We sent you a letter to your e-mail account
                                </div>

                                <div className="modal-footer">
                                    <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Fragment >
        )
    }
}

const mapStateToProps = function (store) {
    return {
        subscribe: store.subscribe
    }

};

export default connect(
    mapStateToProps, { closeModal }
)(ModalSubscribe)
