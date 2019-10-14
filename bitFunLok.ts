//% weight=0 color=#11afae icon="\uf001" block="bit Fun 樂"
namespace bitFunLok {
    /** Return the input of the Foil Paper */
    //% block="paino status (P2, P8, P1)"
    //% blockId="getPainoStatus"
    //% weight=1
    export function getPainoStatus():number {
        let foil2: number;
        let foil1: number;
        let foil0: number;
        let status: number;

        let status = 0;
        if (pins.digitalReadPin(DigitalPin.P2) == PulseValue.High) {
            status += 4;
        }
        if (pins.digitalReadPin(DigitalPin.P8) == PulseValue.High) {
            status += 2;
        }
        if (pins.digitalReadPin(DigitalPin.P1) == PulseValue.High) {
            status += 1;
        }
        return status;
    }
}
