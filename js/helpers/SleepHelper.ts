export class SleepHelper {
    static sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}