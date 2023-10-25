import { ObserverEvent } from '@/types';

const subscribers: Map<ObserverEvent, (() => void)[]> = new Map();

export const publisher = {
  subscribe: (subscriber: () => void, event: ObserverEvent) => {
    const callbacks = subscribers.get(event);
    if (callbacks) {
      callbacks.push(subscriber);
    } else {
      subscribers.set(event, [subscriber]);
    }
    return () => {
      subscribers.set(
        event,
        callbacks?.filter((callback) => callback !== subscriber) || [],
      );
    };
  },
  notify: (event: ObserverEvent): void => {
    const callbacks = subscribers.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback());
    }
  },
};
