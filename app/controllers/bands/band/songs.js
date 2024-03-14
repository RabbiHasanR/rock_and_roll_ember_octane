import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Song } from '../../../routes/bands';

export default class BandsBandSongsController extends Controller {
  @tracked showAddSong = true;
  @tracked title = '';

  get hasNoTitle() {
    return !this.title;
  }

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }

  @action
  saveSong() {
    console.log('saveSong band:', this.model);
    // let song = new Song({ title: this.title, band: this.band });
    // this.band.songs = [...this.band.songs, song];
    let song = new Song({ title: this.title, band: this.model });
    this.model.songs = [...this.model.songs, song];
    this.title = '';
    this.showAddSong = true;
  }

  @action
  cancel() {
    this.title = '';
    this.showAddSong = true;
  }
}
