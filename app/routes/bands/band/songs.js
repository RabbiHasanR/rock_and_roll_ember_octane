import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  // model() {
  //   let band = this.modelFor('bands.band');
  //   return band.songs;
  // }

  // setupController(controller) {
  //   super.setupController(...arguments)
  //   controller.set('band', this.modelFor('bands.band'))
  // }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
