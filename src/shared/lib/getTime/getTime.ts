export const getTime = (leftPos: number, fullWidth: number, cloudWidth: number, direction: 'left' | 'right', fullTime = 10): number => {
    const k = direction === 'left' ? leftPos / fullWidth : (fullWidth - cloudWidth - leftPos) / fullWidth
    return k * fullTime
}
