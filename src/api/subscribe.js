// Dummy function to simulate a delay caused by an AJAX Response
const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Stubbed AJAX call
export const subscribe = async () => {
  await wait(1000);

  // Simulate 50% success - 50%
  const success = Math.random() < 0.5;

  return { success };
};

export default subscribe;
