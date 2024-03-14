import Route from '@ember/routing/route';

export default class BandsNewRoute extends Route {
  resetController(controller) {
    controller.name = '';
  }
}
