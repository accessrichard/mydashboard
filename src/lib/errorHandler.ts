import { IVueError, IWindowError } from '../types';
import eventBus from "./eventBus";

export function handlePromiseError() {
    window.addEventListener('unhandledrejection', (event) => {
        console.log("rror:unhandledrejection: " + event);
        eventBus.$emit("error:unhandledrejection", event);
    });
}

export function handleVueError(err: Error, vm: any, info: any) {
    console.log("error:vue: " + err + " - " + info);

    eventBus.$emit("error:vue", {
        error: err,
        info,
        vm
    } as IVueError);
}

export function handleWindowError() {
    window.onerror = (eventOrMessage: any, source: any, lineno: any, colnumber?: any): any => {
        console.log("error:window" + eventOrMessage + " - " + source);
        eventBus.$emit("error:window", {
            message: eventOrMessage,
            url: source,
            line: lineno,
            col: colnumber,
        } as IWindowError);
    };
}
