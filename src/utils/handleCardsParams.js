const handleCardsParams = (screen) => {
  switch (true) {
    case screen > 1124:
      return { cardsInPage: 16, cardsLoad: 8 };

    case screen > 768 && screen <= 1124:
      return { cardsInPage: 12, cardsLoad: 3 };

    case screen > 425 && screen <= 768:
      return { cardsInPage: 8, cardsLoad: 2 };

    case screen <= 425:
      return { cardsInPage: 5, cardsLoad: 2 };

    default: return { message: "width doesn't find" };
  }
};

export default handleCardsParams;
