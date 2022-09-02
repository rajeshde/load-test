const estimate = () => {
  const n = 10000000;
  let inside = 0,
    i,
    x,
    y;

  for (i = 0; i < n; i++) {
    x = Math.random();
    y = Math.random();

    if (Math.sqrt(x * x + y * y <= 1)) {
      inside++;
    }
  }

  return (4 * inside) / n;
};

const heavyProcess = (req, res) => {
  const result = estimate();

  return res.send({ result });
};

export default heavyProcess;
