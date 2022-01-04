export const TIMER = 'TIMER'
export const RESET = 'RESET'
export const LINE = 'LINE'

const initialState = {
    milsecond: 0,
    second: 0,
    minute: 0,
    line: 0,
    status: false,
};

export const circleReducer = (state, action) => {
    switch (action.type) {

        case TIMER:
            return {
                ...state,
                status: false,
                milsecond: state.status === false && state.milsecond < 99 ? state.milsecond + 1 : 0,
                second: (state.status === false && state.second < 60 && state.milsecond === 99 ? state.second += 1 : state.second + 0)
                    && (state.second === 60 ? 0 : state.second),
                minute: (state.status === false && state.minute < 60 && state.second === 60 ? state.minute += 1 : state.minute + 0)
                    && (state.minute === 60 ? 0 : state.minute),
            };

        case RESET:
            return {
                ...state,
                status: true,
                line: state.status === true ? 0 : 0,
                second: state.status === true ? 0 : 0,
                milsecond: state.status === true ? 0 : 0,
                minute: state.status === true ? 0 : 0
            }

        case LINE:
            return {
                ...state,
                line: (state.milsecond !== 0 || state.second !== 0 || state.minute !== 0) && state.line != 360 ? state.line += 0.06 : state.line += 0
            }

        default:
            return initialState;
    }
};