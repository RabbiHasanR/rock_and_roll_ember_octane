import { tracked } from '@glimmer/tracking';

export default class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs, description }, relationships = {}) {
    this.id = id;
    this.name = name;
    this.songs = songs || [];
    this.relationships = relationships;
    this.description = description;
  }
}
