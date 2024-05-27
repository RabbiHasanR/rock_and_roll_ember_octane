export function initialize(owner) {
  let catalogService = owner.lookup('service:catalog');
  catalogService.setIsLoading(true);
  console.log('instance initializer', catalogService.isLoading);

  fetch('/bands')
    .then((response) => response.json())
    .then((data) => {
      console.log('fetch bands:', data);

      catalogService.setBands(catalogService.loadAll(data));
      catalogService.setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching API data:', error);
      catalogService.setIsLoading(false);
    });
  // let catalogService = owner.lookup('service:catalog');
  // let data = catalogService.fetchAll('bands');
  // console.log('instance initializer:', data);
}

export default {
  initialize,
};
