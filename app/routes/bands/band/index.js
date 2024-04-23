import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BandsBandIndexRoute extends Route {
  @service router;

  redirect(band) {
    if (band.description) {
      this.router.transitionTo('bands.band.details');
    } else {
      this.router.transitionTo('bands.band.songs');
    }
  }
}
