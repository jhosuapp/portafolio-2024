export type switchAction = {
    type: '[SWITCH] enable/disable' | '[SWITCH] validate if is checked',
    payload: {
        status: boolean,
        id: string
    }
}