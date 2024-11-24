{
  const calculateSpeed = (value: unknown) => {
    if (typeof value == "number") {
      const result = (value * 1000) / 3600;
      console.log(`Speed Is ${result}`);
    } else if (typeof value == "string") {
      const [result, unit] = value.split(" ");
      const speed = (parseInt(result) * 1000) / 3600;
      console.log(`Speed Is ${speed.toFixed(2)} ${unit}`);
    } else {
      console.log("Please Provide Valid Inpput");
    }
  };

  calculateSpeed("10 kmh^-1");
}
