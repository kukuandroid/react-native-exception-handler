// export type JSExceptionHandler = (error: Error, isFatal: boolean) => void;
// export type NativeExceptionHandler = (exceptionMsg: string) => void;

// declare const getJSExceptionHandler: () => JSExceptionHandler;

// declare const setJSExceptionHandler: (
//   handler: JSExceptionHandler,
//   allowInDevMode?: boolean
// ) => void;

// declare const setNativeExceptionHandler: (
//   handler: NativeExceptionHandler,
//   forceAppQuit?: boolean, // Android only
//   executeDefaultHandler?: boolean
// ) => void;

declare const init: (
  apiLogUrl: string,
  errorTitle: string,
  errorMessage: string,
  customerId: string,
) => void;

declare const sendToAPI: (
  errTitle: string,
  errDetail: Object,
) => void;


// export {sendToAPI} from './send-error'
// export declare function sendToAPI(error?: object): void;