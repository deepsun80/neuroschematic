import { RH, SA, INT, SS, IS, AJGJ, SC, PM1, SSC, LD, TM, PM2, BB1, BB2 } from '../actions/selectBrachialPlexusMuscle';

const initMuscleColor = {
    RH: false, 
    SA: false, 
    INT: false, 
    SS: false, 
    IS: false,
    AJGJ: false,
    SC: false, 
    PM1: false, 
    SSC: false, 
    LD: false, 
    TM: false, 
    PM2: false, 
    BB1: false, 
    BB2: false
}
export default (brachialPlexusMuscleColor = initMuscleColor, action) => {
    switch(action.type) {
        case RH:
            brachialPlexusMuscleColor.RH = action.payload;
            return brachialPlexusMuscleColor;
        case SA:
            brachialPlexusMuscleColor.SA = action.payload;
            return brachialPlexusMuscleColor;
        case INT:
            brachialPlexusMuscleColor.INT = action.payload;
            return brachialPlexusMuscleColor;
        case SS:
            brachialPlexusMuscleColor.SS = action.payload;
            return brachialPlexusMuscleColor;
        case IS:
            brachialPlexusMuscleColor.IS = action.payload;
            return brachialPlexusMuscleColor;
        case AJGJ:
            brachialPlexusMuscleColor.AJGJ = action.payload;
            return brachialPlexusMuscleColor;
        case SC:
            brachialPlexusMuscleColor.SC = action.payload;
            return brachialPlexusMuscleColor;
        case PM1:
            brachialPlexusMuscleColor.PM1 = action.payload;
            return brachialPlexusMuscleColor;
        case SSC:
            brachialPlexusMuscleColor.SSC = action.payload;
            return brachialPlexusMuscleColor;
        case LD:
            brachialPlexusMuscleColor.LD = action.payload;
            return brachialPlexusMuscleColor;
        case TM:
            brachialPlexusMuscleColor.TM = action.payload;
            return brachialPlexusMuscleColor;
        case PM2:
            brachialPlexusMuscleColor.PM2 = action.payload;
            return brachialPlexusMuscleColor;
        case BB1:
            brachialPlexusMuscleColor.BB1 = action.payload;
            return brachialPlexusMuscleColor;
        case BB2:
            brachialPlexusMuscleColor.BB2 = action.payload;
            return brachialPlexusMuscleColor;
        default:
            return brachialPlexusMuscleColor;
    }
};