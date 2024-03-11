import { module, test } from 'qunit';
import { setupTest } from 'rarwe/tests/helpers';

module('Unit | Route | bands/band', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bands/band');
    assert.ok(route);
  });
});
