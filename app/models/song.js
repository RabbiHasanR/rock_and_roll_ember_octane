import { tracked } from '@glimmer/tracking';

export default class Song {
  @tracked rating;

  constructor({ id, title, rating, band }, relationships = {}) {
    this.id = id;
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
    this.relationships = relationships;
  }
}
