import { SELECTED_NERVE } from '../actions';

import nerveData from './nerve';

const initNerve = {
    selectedNerveTitle: '',
    selectedNerveNerves: [],
    selectedNerveSensory: [],   
    selectedNerveMuscles: [],
    selectedNerveCutaneous: []
}

export default (selectedNerve = initNerve, action) => {
    switch(action.type) {
        case SELECTED_NERVE:
            nerveData.forEach(nerveObj => {
                if (nerveObj.title === action.nerve) {
                    selectedNerve.selectedNerveTitle = nerveObj.title;
                    selectedNerve.selectedNerveNerves = nerveObj.nerves;
                    selectedNerve.selectedNerveSensory = nerveObj.sensory;                   
                    selectedNerve.selectedNerveMuscles = nerveObj.muscles;
                    selectedNerve.selectedNerveCutaneous = nerveObj.cutaneous;
                }
            });
            return selectedNerve;
        default:
            return selectedNerve;
    }
};