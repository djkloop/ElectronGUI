import { observable, action, runInAction } from 'mobx';

export default class Counter {
  @observable count = 1;

  @action.bound
  increment() {
    this.count += 1;
  }

  @action.bound
  decrement() {
    this.count -= 1;
  }

  @action.bound
  incrementIfOdd() {
    if (this.count % 2 === 0) {
      this.count += 1;
    }
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      runInAction('increment', () => {
        this.count += 1;
      });
    }, 1000);
  }
}
