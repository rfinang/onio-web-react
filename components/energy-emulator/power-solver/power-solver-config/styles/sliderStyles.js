
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
        background: 'var(--onio-color-primary)',
        borderRadius: TRACK_WIDTH / 2,
        position: 'relative'
    },
    fill: (value, min, max) => ({
        position: 'absolute',
        bottom: 0,
        width: TRACK_WIDTH,
        height: `${((value - min) / (max - min)) * 100}%`,
        background: 'var(--onio-color-alert)',
        borderRadius: TRACK_WIDTH / 2
    }),
    thumbBase: {
        height: 30,
        width: 30,
        backgroundColor: 'var(--onio-color-alert)',
        border: '2px solid var(--onio-color-background)',
        borderRadius: '50%',
        boxSizing: 'border-box',
        opacity: 1,
        boxShadow: 'none'
    }
};
