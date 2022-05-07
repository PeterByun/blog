export class AnimationManager {
  timers: {
    [key: string]: ReturnType<typeof window.setTimeout> | null;
  } = {};

  setTimer(animName: string) {
    this.timers[animName] = setTimeout(() => {
      this.timers[animName] = null;
    }, 1000);
  }

  run(animName: string, cb: () => void) {
    if (this.timers[animName]) {
      const timerId = this.timers[animName];
      timerId && window.clearTimeout(timerId);
      this.setTimer(animName);

      return;
    } else {
      cb();

      this.setTimer(animName);
    }
  }

  clearTimers() {
    for (const timerId of Object.values(this.timers)) {
      timerId && window.clearTimeout(timerId);
    }
  }
}
