import {
  LAPTOP_SCREEN_RESOLUTION,
  MOBILE_SCREEN_RESOLUTION,
  TABLET_SCREEN_RESOLUTION,
  CARDS_IN_PAGE_ON_LAPTOP,
  CARDS_IN_PAGE_ON_SMALL_LAPTOP,
  CARDS_IN_PAGE_ON_TABLET,
  CARDS_IN_PAGE_ON_MOBILE,
  CARDS_LOAD_ON_LAPTOP,
  CARDS_LOAD_ON_SMALL_LAPTOP,
  CARDS_LOAD_ON_TABLET,
  CARDS_LOAD_ON_MOBILE,
} from "./constants";

const handleCardsParams = (screen) => {
  switch (true) {
    case screen > LAPTOP_SCREEN_RESOLUTION:
      return {
        cardsInPage: CARDS_IN_PAGE_ON_LAPTOP, cardsLoad: CARDS_LOAD_ON_LAPTOP,
      };

    case screen > TABLET_SCREEN_RESOLUTION && screen <= LAPTOP_SCREEN_RESOLUTION:
      return {
        cardsInPage: CARDS_IN_PAGE_ON_SMALL_LAPTOP, cardsLoad: CARDS_LOAD_ON_SMALL_LAPTOP,
      };

    case screen > MOBILE_SCREEN_RESOLUTION && screen <= TABLET_SCREEN_RESOLUTION:
      return {
        cardsInPage: CARDS_IN_PAGE_ON_TABLET, cardsLoad: CARDS_LOAD_ON_TABLET,
      };

    case screen <= MOBILE_SCREEN_RESOLUTION:
      return {
        cardsInPage: CARDS_IN_PAGE_ON_MOBILE, cardsLoad: CARDS_LOAD_ON_MOBILE,
      };

    default:
      return { message: "width doesn't find" };
  }
};

export default handleCardsParams;
