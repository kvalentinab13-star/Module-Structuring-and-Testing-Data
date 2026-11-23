const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return for five of hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return for seven of spades", () => {
  const sevenofSpades = getCardValue("7♠");
  expect(sevenofSpades).toEqual(7);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return for face cards", () => {
  const faceCards = getCardValue("10♠");
  expect(faceCards).toEqual(10);
});

test("should return for jack cards", () => {
  const jack = getCardValue("J♠");
  expect(jack).toEqual(10);
});

test("should return for queen cards", () => {
  const queen = getCardValue("Q♥");
  expect(queen).toEqual(10);
});

test("should return for king cards", () => {
  const king = getCardValue("K♦");
  expect(king).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  const ace = getCardValue("A♥");
  expect(ace).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow("Invalid card");
});
