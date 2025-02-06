export const fakeFetch = (timer: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated response, which can be customized
      resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({ message: "This is a simulated response!" }),
      });
    }, timer
    ); // {timer} seconds delay
  });
};