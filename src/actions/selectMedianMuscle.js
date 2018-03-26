export const PT = 'PT';
export const FCR = 'FCR';
export const PL = 'PL';
export const FDS = 'FDS';
export const FDP = 'FDP';
export const FPL = 'FPL';
export const PQ = 'PQ';
export const OP = 'OP';
export const APB = 'APB';
export const FPB = 'FPB';
export const LUM = 'LUM';
export const DB = 'DB';
export const TCB = 'TCB';

export const selectPT = () => {
    return {
        type: PT,
        payload: true
    };
}

export const removePT = () => {
    return {
        type: PT,
        payload: false
    };
}

export const selectFCR = () => {
    return {
        type: FCR,
        payload: true,
    };
}

export const removeFCR = () => {
    return {
        type: FCR,
        payload: false,
    };
}

export const selectPL = () => {
    return {
        type: PL,
        payload: true,
    };
}

export const removePL = () => {
    return {
        type: PL,
        payload: false,
    };
}

export const selectFDS = () => {
    return {
        type: FDS,
        payload: true,
    };
}

export const removeFDS = () => {
    return {
        type: FDS,
        payload: false,
    };
}

export const selectFDP = () => {
    return {
        type: FDP,
        payload: true,
    };
}

export const removeFDP = () => {
    return {
        type: FDP,
        payload: false,
    };
}

export const selectFPL = () => {
    return {
        type: FPL,
        payload: true,
    };
}

export const removeFPL = () => {
    return {
        type: FPL,
        payload: false,
    };
}

export const selectPQ = () => {
    return {
        type: PQ,
        payload: true,
    };
}

export const removePQ = () => {
    return {
        type: PQ,
        payload: false,
    };
}

export const selectOP = () => {
    return {
        type: OP,
        payload: true,
    };
}

export const removeOP = () => {
    return {
        type: OP,
        payload: false,
    };
}

export const selectAPB = () => {
    return {
        type: APB,
        payload: true,
    };
}

export const removeAPB = () => {
    return {
        type: APB,
        payload: false,
    };
}

export const selectFPB = () => {
    return {
        type: FPB,
        payload: true,
    };
}

export const removeFPB = () => {
    return {
        type: FPB,
        payload: false,
    };
}

export const selectLUM = () => {
    return {
        type: LUM,
        payload: true,
    };
}

export const removeLUM = () => {
    return {
        type: LUM,
        payload: false,
    };
}

export const selectDB = () => {
    return {
        type: DB,
        payload: true,
    };
}

export const removeDB = () => {
    return {
        type: DB,
        payload: false,
    };
}

export const selectTCB = () => {
    return {
        type: TCB,
        payload: true,
    };
}

export const removeTCB = () => {
    return {
        type: TCB,
        payload: false,
    };
}
