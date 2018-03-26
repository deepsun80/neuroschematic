import { PT, FCR, PL, FDS, FDP, FPL, PQ, OP, APB, FPB, LUM, DB, TCB } from '../actions/selectMedianMuscle';

const initMuscleColor = {
    PT: false,
    FCR: false, 
    PL: false, 
    FDS: false, 
    FDP: false, 
    FPL: false, 
    PQ: false, 
    OP: false, 
    APB: false, 
    FPB: false, 
    LUM: false,
    DB: false,
    TCB: false
}

export default (medianMuscleColor = initMuscleColor, action) => {
    switch(action.type) {
        case PT:
            medianMuscleColor.PT = action.payload;
            return medianMuscleColor;
        case FCR:
            medianMuscleColor.FCR = action.payload;
            return medianMuscleColor;
        case PL:
            medianMuscleColor.PL = action.payload;
            return medianMuscleColor;
        case FDS:
            medianMuscleColor.FDS = action.payload;
            return medianMuscleColor;
        case FDP:
            medianMuscleColor.FDP = action.payload;
            return medianMuscleColor;
        case FPL:
            medianMuscleColor.FPL = action.payload;
            return medianMuscleColor;
        case PQ:
            medianMuscleColor.PQ = action.payload;
            return medianMuscleColor;
        case OP:
            medianMuscleColor.OP = action.payload;
            return medianMuscleColor;
        case APB:
            medianMuscleColor.APB = action.payload;
            return medianMuscleColor;
        case FPB:
            medianMuscleColor.FPB = action.payload;
            return medianMuscleColor;
        case LUM:
            medianMuscleColor.LUM = action.payload;
            return medianMuscleColor;
        case DB:
            medianMuscleColor.DB = action.payload;
            return medianMuscleColor;
        case TCB:
            medianMuscleColor.TCB = action.payload;
            return medianMuscleColor;
        default:
            return medianMuscleColor;
    }
};