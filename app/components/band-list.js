import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class BandListComponent extends Component {
  @service router;

  get bands() {
    console.log('bands component:', this.args.bands);
    return this.args.bands.map((band) => {
      return {
        band,
        isActive: this.router.isActive('bands.band', band),
      };
    });
  }
}
