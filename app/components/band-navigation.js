import Component from '@glimmer/component';
import { service } from '@ember/service';
export default class BandNavigationComponent extends Component {
  @service router;

  get isActive() {
    return {
      details: this.router.isActive('bands.band.details', this.args.band),
      songs: this.router.isActive('bands.band.songs', this.args.band),
    };
  }
}
