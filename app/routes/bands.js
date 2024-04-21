import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BandsRoute extends Route {
  @service catalog;

  async model() {
    return this.catalog.fetchAll('bands');
  }
}
