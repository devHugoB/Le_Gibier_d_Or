export const Sliding = {
    in: { 
        opacity: 1, 
        x: -300
    },
    out: { 
        opacity: 0,
        x: 300
    },
    end: {
        opacity: 1,
        x: 0
    }
};

export const ZoomIn = {
    in: {
        scale: 1.1
    },
    out: {
        scale: 1
    }
};

export const FallIn = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -1000
    }
};

export const Shining = {
    in: {
        boxShadow: '0 0 0.6rem white'
    },
    out: {
        boxShadow: 0
    }
}

export const openY = {
    in: {
        height: '100%'
    },
    out: {
        height: '0%'
    }
}