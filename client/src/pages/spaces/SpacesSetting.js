import { useState, useEffect } from "react";
import { getAllAmenity } from "../../api/amenitiesApi";
import { getAllSpaces } from "../../api/spacesApi";

export default function SpacesSetting() {
  const [filterkeywords, setFilterkeywords] = useState([]);
  const [cardsettings, setCardsettings] = useState([]);

  useEffect(() => {

    const fetchSpaces = async () => {
      setFilterkeywords(await getAllAmenity());
      setCardsettings(await getAllSpaces());
    };

    fetchSpaces();
  }, []);

  return {
    filterkeywords,
    cardsettings,
  };
}
