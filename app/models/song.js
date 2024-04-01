export default class Song {
  constructor({ id, title, rating, band }, relationships = {}) {
    this.id = id;
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
    this.relationships = relationships;
  }
}
