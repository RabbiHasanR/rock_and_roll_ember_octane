import { module, test } from 'qunit';
import { setupTest } from 'rarwe/tests/helpers';

module('Unit | Controller | bands/new', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:bands/new');
    assert.ok(controller);
  });
});
