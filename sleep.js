const internalSleep = (millis) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve();
      }, millis);
    } catch (error) {
      reject(error);
    }
  });

async function sleep(millis) {
  return await internalSleep(millis);
}
