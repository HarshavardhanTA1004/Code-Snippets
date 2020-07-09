// Explanation :(promise.race()) The race function returns a Promise that is settled the same way
//  (and takes the same value) as the first promise that settles amongst the promises of the iterable
//   passed as an argument.
//   If the iterable passed is empty, the promise returned will be forever pending.
// If the iterable contains one or more non-promise value and/or an already settled promise,
//  then Promise.race will resolve to the first of these values found in the iterable.

// (promise.all()) : This method can be useful for aggregating the results of multiple promises.

// Resolved
// The returned promise is fulfilled with an array containing all the values of the iterable passed as argument (also non-promise values).

// If an empty iterable is passed, then this method returns (synchronously) an already resolved promise.
// If all of the passed-in promises fulfill, or are not promises, the promise returned by Promise.all is fulfilled asynchronously.
// Rejected
// If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have resolved.

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)