import { FCU, FDP, DCB, PCB, FDM, ADM, ODM, PB, DI, PI, LB, AP, FPB, DB } from '../actions/selectUlnarMuscle';

const initMuscleColor = {
    FCU: false,
    FDP: false, 
    DCB: false, 
    PCB: false, 
    FDM: false, 
    ADM: false, 
    ODM: false, 
    PB: false, 
    DI: false, 
    PI: false, 
    LB: false, 
    AP: false, 
    FPB: false,
    DB: false
}
export default (ulnarMuscleColor = initMuscleColor, action) => {
    switch(action.type) {
        case FCU:
            ulnarMuscleColor.FCU = action.payload;
            return ulnarMuscleColor;
        case FDP:
            ulnarMuscleColor.FDP = action.payload;
            return ulnarMuscleColor;
        case DCB:
            ulnarMuscleColor.DCB = action.payload;
            return ulnarMuscleColor;
        case PCB:
            ulnarMuscleColor.PCB = action.payload;
            return ulnarMuscleColor;
        case FDM:
            ulnarMuscleColor.FDM = action.payload;
            return ulnarMuscleColor;
        case ADM:
            ulnarMuscleColor.ADM = action.payload;
            return ulnarMuscleColor;
        case ODM:
            ulnarMuscleColor.ODM = action.payload;
            return ulnarMuscleColor;
        case PB:
            ulnarMuscleColor.PB = action.payload;
            return ulnarMuscleColor;
        case DI:
            ulnarMuscleColor.DI = action.payload;
            return ulnarMuscleColor;
        case PI:
            ulnarMuscleColor.PI = action.payload;
            return ulnarMuscleColor;
        case LB:
            ulnarMuscleColor.LB = action.payload;
            return ulnarMuscleColor;
        case AP:
            ulnarMuscleColor.AP = action.payload;
            return ulnarMuscleColor;
        case FPB:
            ulnarMuscleColor.FPB = action.payload;
            return ulnarMuscleColor;
        case DB:
            ulnarMuscleColor.DB = action.payload;
            return ulnarMuscleColor;
        default:
            return ulnarMuscleColor;
    }
};