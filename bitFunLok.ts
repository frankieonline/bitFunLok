//% weight=0 color=#11afae icon="\uf001" block="bit Fun 樂"
namespace bitFunLok {
    /** Return the input of the Foil Paper */
    //% block="paino status (P2, P8, P1)"
    //% blockId="getPainoStatus"
    //% weight=1
    export function getPainoStatus():number {
        let foil2: number;
        foil2 = ((pins.digitalReadPin(DigitalPin.P2) == PulseValue.High) ? (1) : (0));
        let foil1: number;
        foil1 = ((pins.digitalReadPin(DigitalPin.P8) == PulseValue.High) ? (1) : (0));
        let foil0: number;
        foil0 = ((pins.digitalReadPin(DigitalPin.P1) == PulseValue.High) ? (1) : (0));

        let status = foil2 * 4 + foil1 * 2 + foil0;
        return status;
    }
}
