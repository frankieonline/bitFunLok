//% weight=0 color=#11afae icon="\uf001" block="bit Fun 樂"
namespace bitFunLok {
    /** Return the input of the Foil Paper */
    //% block="paino status (P2, P8, P1)"
    //% blockId="getPainoStatus"
    //% weight=1
    export function getPainoStatus():number {
        let status: number;

        status = 0;
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            status += 4;
        }
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            status += 2;
        }
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            status += 1;
        }
        return status;
    }
}
