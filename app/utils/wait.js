export default function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}
