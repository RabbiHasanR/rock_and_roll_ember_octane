import { Model, hasMany } from 'miragejs';

export default Model.extend({
  songs: hasMany(),
});
