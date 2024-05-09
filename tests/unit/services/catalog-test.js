import { module, test } from 'qunit';
import { setupTest } from 'rarwe/tests/helpers';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

module('Unit | Service | catalog', function (hooks) {
  setupTest(hooks);

  test('it can store and retrive bands', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add('band', new Band({ id: 1, name: 'Led Zeppelin' }));
    assert.strictEqual(catalog.bands.length, 1);
    assert.strictEqual(catalog.bands[0].name, 'Led Zeppelin');
  });

  test('it can store and retrive songs', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add(
      'song',
      new Song({ id: 1, title: 'Archilles Last Stand', rating: 5 })
    );
    assert.strictEqual(catalog.songs.length, 1);
    assert.strictEqual(catalog.songs[0].title, 'Archilles Last Stand');
  });

  test('it can load a record from a JSON:API response', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.load({
      data: {
        type: 'bands',
        id: '1',
        attributes: {
          name: 'TOOL',
        },
        relationships: {
          songs: {
            links: {
              related: '/bands/1/songs',
            },
          },
        },
      },
    });
    let band = catalog.bands[0];
    assert.strictEqual(band.name, 'TOOL');
    assert.strictEqual(band.relationships.songs, '/bands/1/songs');
  });
});
