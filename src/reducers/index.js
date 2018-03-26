import { combineReducers } from 'redux';

import NerveReducer from './nerveReducer';
import NerveModalReducer from './nerveModalReducer';
import InfoModalReducer from './infoModalReducer';
import CursorReducer from './cursorReducer';
import CursorTextReducer from './cursorTextReducer';
import UlnarMuscleReducer from './ulnarMuscleReducer';
import MedianMuscleReducer from './medianMuscleReducer';
import BrachialPlexusMuscleColor from './brachialPlexusMuscleReducer';
import DemoModalReducer from './demoModalReducer';
import AuthUser from './authUserReducer';

const rootReducer = combineReducers({
    selectedNerve: NerveReducer,
    nerveModalState: NerveModalReducer,
    cursorOpacity: CursorReducer,
    cursorTextOpacity: CursorTextReducer,
    infoModalState: InfoModalReducer,
    ulnarMuscleColor: UlnarMuscleReducer,
    brachialPlexusMuscleColor: BrachialPlexusMuscleColor,
    medianMuscleColor: MedianMuscleReducer,
    demoModalState: DemoModalReducer,
    authUser: AuthUser
});

export default rootReducer;