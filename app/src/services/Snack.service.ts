import { EmitterSubscription, NativeEventEmitter } from 'react-native';

const emitter = new NativeEventEmitter();

export type SnackOptions = {
  message: string;
  duration?: number;
};

export class SnackService {
  public static listen(...args: any[]):EmitterSubscription {
    return emitter.addListener(...args);
  }

  public static showSnack(opts: SnackOptions) {
    return emitter.emit('snack', opts);
  }

  public static simpleMessage(message:string) {
    this.showSnack({ message });
  }
}