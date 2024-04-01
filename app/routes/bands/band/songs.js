import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Song from '../../../models/song';
import fetch from 'fetch';

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  async model() {
    let band = this.modelFor('bands.band');
    let url = band.relationships.songs;
    let response = await fetch(url);
    let json = await response.json();
    let songs = [];
    for (let item of json.data) {
      let { id, attributes, relationships } = item;
      let rels = {};
      for (let relationshipName in relationships) {
        rels[relationshipName] = relationships[relationshipName].links.related;
      }
      let song = new Song({ id, ...attributes }, rels);
      songs.push(song);
      this.catalog.add('song', song);
    }
    band.songs = songs;
    return band;
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
