import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BandsRoute extends Route {
  @service catalog;

  async model() {
    let bands = this.catalog.fetchAll('bands');
    return bands
  }
}
