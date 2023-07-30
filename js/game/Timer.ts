export class Timer {
    private enabled: boolean;

    constructor(public interval: number, public counter: number, public tickFunc: any) {
        this.enabled = false;
        
        const intervalId = setInterval(() => {
            this.tick(intervalId, tickFunc);
        }, interval)
    }

    start() {
        this.enabled = true;
    }

    stop() {
        this.enabled = false;
    }

    private tick(intervalId: number, tickFunc: any) {
        if (!this.enabled) {
            return;
        }

        this.counter = this.counter - 1;
        console.log(this.counter.toString());
        tickFunc();

        if (this.counter === 0) {
            clearInterval(intervalId);
        }
    }
}