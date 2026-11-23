function getOrdinalNumber(num) {
  if (num === 11) return `11th`;

  const lastNumberChar = num.toString().slice(-1);

  if (lastNumberChar === "1") {
    return `${num}st`;
  }
}

module.exports = getOrdinalNumber;
