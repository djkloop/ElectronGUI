import { observable, action } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Counter from './model/counter';

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
    this.counter = new Counter(this);
  }
}

class UIStore {
  @observable bgColor = 'yellow';
  constructor(root) {
    this.root = root;
  }
  @action
  changeBgColor() {
    this.bgColor = 'red';
  }
}

const routingStore = new RouterStore();
const rootStore = new RootStore();

const stores = {
  routing: routingStore,
  rootStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

export { stores, history };
