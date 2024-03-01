import { useState, useEffect } from "react";
import { mockFilterKeywords, mockSpaces } from "../../mocks/mockSpaces";

export default function SpacesSetting() {
  const [filterkeywords, setFilterkeywords] = useState([]);
  const [cardsettings, setCardsettings] = useState([]);

  useEffect(() => {
    setFilterkeywords(mockFilterKeywords.keywords);
    setCardsettings(mockSpaces.spaces);
  }, []);

  return {
    filterkeywords,
    cardsettings,
  };
}
