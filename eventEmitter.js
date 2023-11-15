class EventEmitter {
  #events = new Map();
  subscribe(event, cb) {
    if (this.#events.has(event)) {
      const events = this.#events.get(event);
      events.push(cb);
      this.#events.set(event, events);
    } else {
      this.#events.set(event, [cb]);
    }

    return {
      unsubscribe: () => {
        const findEvent = this.#events.filter((callback) => callback == cb);

        this.#events.delete(findEvent);
      },
    };
  }

  emit(event, args = []) {
    const events = this.#events.get(event).map((cb) => cb(args));

    return events;
  }
}

[
  [],
  ["firstEvent", "x => x + 1"],
  ["firstEvent", "x => x + 2"],
  [0],
  ["firstEvent", [5]],
];
