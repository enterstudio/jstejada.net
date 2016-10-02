import { FINISH_INTRO } from 'constants';


export default function reducer(state = false, action) {
  switch (action.type) {
    case FINISH_INTRO:
      return true;
    default:
      return state;
  }
}
