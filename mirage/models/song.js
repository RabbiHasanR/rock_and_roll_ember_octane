import { Model, belongsTo } from 'miragejs';
import band from './band';

export default Model.extend({
  band: belongsTo(),
});
