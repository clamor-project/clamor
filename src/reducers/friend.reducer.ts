import { IFriendState } from ".";
import { loginTypes } from "../actions/login.action";
import { userTypes } from "../actions/user.action";
import { FRIENDING_TYPES } from "../actions/friending.action";

const initialState:IFriendState = {
  mutualFriends: [],
  friendRequests: [],
  friendables: [],
  messages: []
}

export const FriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.Set_Mutual_Friends:
      return {
        ...state,
        mutualFriends: action.payload
      }
    case loginTypes.Set_Friend_Requests:
      return {
        ...state,
        friendRequests: action.payload
      }
    case userTypes.Set_Friendables:
      return {
        ...state,
        friendables: action.payload
      }
    case FRIENDING_TYPES.Set_Conversation:
      return {
        ...state,
        messages: action.payload
      }
    default:
      return state
  }
}
