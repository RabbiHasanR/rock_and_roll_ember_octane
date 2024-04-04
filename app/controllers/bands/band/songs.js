import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Song from '../../../models/song';
import { service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
  @service catalog;

  @tracked showAddSong = true;
  @tracked title = '';

  get hasNoTitle() {
    return !this.title;
  }

  @action
  async updateRating(song, rating) {
    song.rating = rating;
    let payload = {
      data: {
        id: song.id,
        type: 'songs',
        attributes: {
          rating,
        },
      },
    };
    await fetch(`/songs/${song.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(payload)
    });
  }

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
  @action
  async saveSong() {
    let payload = {
      data: {
        type: 'songs',
        attributes: { title: this.title },
        relationships: {
          band: {
            data: {
              id: this.model.id,
              type: 'bands',
            },
          },
        },
      },
    };

    let response = await fetch('/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(payload),
    });
    let json = await response.json();
    let { id, attributes, relationships } = json.data;
    let rels = {};
    for (let relationshipName in relationships) {
      rels[relationshipName] = relationships[relationshipName].links.related;
    }
    let song = new Song({ id, ...attributes }, rels);
    this.catalog.add('song', song);
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
