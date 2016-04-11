import { FINISH_INTRO } from 'constants';


export default function introDone(state = false, action) {
  switch (action.type) {
    case FINISH_INTRO:
      return true;
    default:
      return state;
  }
}
