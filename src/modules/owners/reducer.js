import CONSTANTS from "../../common/constants";

const initialState = {
  owners: [],
  showModal: false
};

function ownersReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.FETCH_OWNERS:
      const ownersData = action.payload
      return { ...state,  owners: [...ownersData ]};
    case CONSTANTS.OWNER_MODAL:
      return { ...state, showModal: action.payload };
    default:
      return { ...state };
  }
}

export default ownersReducer;