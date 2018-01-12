//service from  guy from stackoverflow

export class SharedService {
    private callback:any = null;

    public constructor() {
    }
    public getCallback() {
    //   console.log('calback z shared service '+ this.callback)
        return this.callback;

    }

    public setCallback(call) {
        this.callback = call;
    }
}
