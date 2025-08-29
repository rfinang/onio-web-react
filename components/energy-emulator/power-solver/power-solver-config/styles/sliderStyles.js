
export const TRACK_HEIGHT = 295;
export const TRACK_WIDTH  = 4;

export const SLIDER_STYLES = {
    wrapper: disabled => ({
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : 'auto'
    }),
    trackContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: TRACK_HEIGHT
    },
    track: {
        width: TRACK_WIDTH,
        height: TRACK_HEIGHT,
        background: '#2A2728',
        borderRadius: TRACK_WIDTH / 2,
        position: 'relative'
    },
    fill: (value, min, max) => ({
        position: 'absolute',
        bottom: 0,
        width: TRACK_WIDTH,
        height: `${((value - min) / (max - min)) * 100}%`,
        background: '#EE4A26',
        borderRadius: TRACK_WIDTH / 2
    }),
    thumbBase: {
        height: 30,
        width: 30,
        backgroundColor: '#EE4A26',
        border: '2px solid #F5F5F5',
        borderRadius: '50%',
        boxSizing: 'border-box',
        opacity: 1,
        boxShadow: 'none'
    }
};