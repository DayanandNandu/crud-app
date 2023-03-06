import { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { openOrCloseAddOwnerModal, addOwner, updateOwner } from '../action';

class AddOwner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatNumber: this.props.config.owner ? this.props.config.owner.flatNumber : '',
      name: this.props.config.owner ? this.props.config.owner.name : '',
      contactNumber: this.props.config.owner ? this.props.config.owner.contactNumber : '',
      email: this.props.config.owner ? this.props.config.owner.email : '',
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }

  onSubmit() {
    this.props.config.isEdit ? this.props.updateOwner(this.props.config.owner.id, this.state) : this.props.addOwner(this.state)
  }

  closeModal() {
    this.props.openOrCloseAddOwnerModal(false);
  }

  render() {
    return (
      <Modal show={this.props.showModal} id='add-owner' animation={true} onHide={() => this.closeModal()}>
        <Modal.Header>
          <h5>{ this.props.config.isEdit ? 'Update Owner' : 'Add Owner' }</h5>
          <i className="fa fa-times" onClick={() => this.closeModal()} />        
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-floating my-2">
              <input type="text" className="form-control" id="flatNumber" name="flatNumber" placeholder="flatNumber" value={this.state.flatNumber} onChange={this.handleInputChange} />
              <label htmlFor="flatNumber" className="bold">Flat Number</label>  
            </div>
            <div className="form-floating my-2">
              <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
              <label htmlFor="name" className="bold">Name</label>
            </div>
            <div className="form-floating my-2">
              <input type="number" className="form-control" id="contactNumber" name="contactNumber" placeholder="Contact Number" value={this.state.contactNumber} onChange={this.handleInputChange} />
              <label htmlFor="contactNumber" className="bold">Contact Number</label>
            </div>
            <div className="form-floating my-2">
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
              <label htmlFor="email" className="bold">Email</label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-danger btn-sm" onClick={() => this.closeModal()}>Cancel</button>
            <button className="btn btn-outline-success btn-sm ms-3" onClick={() => this.onSubmit()}>{ this.props.config.isEdit ? 'Update' : 'Add' }</button>
          </div>
        </Modal.Footer>
      </Modal>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    showModal: state.ownersReducer.showModal
  }
};

export default connect(mapStateToProps, {addOwner, updateOwner, openOrCloseAddOwnerModal})(AddOwner);
