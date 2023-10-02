const fromHex = (hex: any) => {
  let hexNumber = String(hex);
  hexNumber = String(Number(hex) / 10 ** 18);

  return hexNumber;
};

export default fromHex;
