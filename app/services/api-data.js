import Service from '@ember/service';

export default class ApiDataService extends Service {
  data = null;

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
