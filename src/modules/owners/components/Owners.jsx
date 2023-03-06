import { Component } from "react";
import { connect } from "react-redux";
import { fetchOwners, deleteOwner, openOrCloseAddOwnerModal } from "../action";
import AddOrUpdateOwner from "./AddOrUpdateOwner";

class Owner extends Component {

  state = {
    owner: null,
    isEdit: false
  };

  componentDidMount() {
    this.props.fetchOwners();
  }

  onAddOwnerBtnClick() {
    this.props.openOrCloseAddOwnerModal(true);
    this.setState({ owner: null, isEdit: false });
  }
  
  onUpdateOwnerBtnClick(owner) {
    this.props.openOrCloseAddOwnerModal(true);
    this.setState({ owner, isEdit: true });
  }
 
  render() {
    return (
      <div className="container-fluid">
        <div className="my-3 table-responsive">
          <h5>Owners Association</h5>
          <div className="d-flex justify-content-end">
            <i className="fa fa-plus-circle text-primary cursor-pointer fa-3x" title="Add Owner" onClick={() => this.onAddOwnerBtnClick()}></i>
          </div>
          <table className="my-3 table table-hover table-bordered">
            <thead className="table-head">
              <tr className="table-primary">
                <th>Flat Number</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props?.owners.map((owner, index) => {
                return (
                  <tr key={index}>
                    <td className="text-primary">{owner.flatNumber}</td>
                    <td className="text-primary">{owner.name}</td>
                    <td>{owner.contactNumber}</td>
                    <td>{owner.email}</td>
                    <td className="d-flex justify-content-between">
                      <i className="fa fa-edit fa-2x cursor-pointer text-info" title="Edit Owner" onClick={() => this.onUpdateOwnerBtnClick(owner)}></i>
                      <i className="fa fa-trash fa-2x cursor-pointer text-danger" title="Delete Owner" onClick={() => this.props.deleteOwner(owner.id)}></i>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {this.props.showModal ? <AddOrUpdateOwner config={this.state} /> : null }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    owners: state.ownersReducer.owners,
    isLoading: state.ownersReducer.isLoading,
    showModal: state.ownersReducer.showModal
  };
};

export default connect(mapStateToProps, { fetchOwners, deleteOwner, openOrCloseAddOwnerModal })(Owner);