import CONSTANTS from '../../common/constants';
import * as ownerService from './service';

export const fetchOwners = () => {
  return (dispatch) => {
    ownerService.getOwners()
      .then(response => {
        const owners = response.data.owners.map(owner => ({ id: owner._id, ...owner}));
        dispatch({ type: CONSTANTS.FETCH_OWNERS, payload: owners });
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const addOwner = (owner) => {
  return (dispatch) => {
    ownerService.addOwner(owner)
      .then(response => {
        dispatch(openOrCloseAddOwnerModal(false));
        dispatch(fetchOwners());
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const updateOwner = (id, updatedOwner) => {
  return (dispatch) => {
    ownerService.updateOwner(id, updatedOwner)
      .then(response => {
        dispatch(openOrCloseAddOwnerModal(false));
        dispatch(fetchOwners());
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const deleteOwner = (id) => {
  return (dispatch) => {
    ownerService.deleteOwner(id)
      .then(response => {
        dispatch(fetchOwners());
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const openOrCloseAddOwnerModal = (isShow) => {
  return (dispatch) => {
    dispatch({ type: CONSTANTS.OWNER_MODAL, payload: isShow });
  }
}
