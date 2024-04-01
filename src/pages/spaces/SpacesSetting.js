import { useState, useEffect } from "react";
import { getAllAmenity } from "../../api/amenitiesApi";
import { getAllSpaces } from "../../api/spacesApi";

export default function SpacesSetting() {
  const [filterAmenities, setFilterAmenities] = useState([]);
  const [cardsettings, setCardsettings] = useState([]);

  useEffect(() => {

    const fetchSpaces = async () => {
      setFilterAmenities(await getAllAmenity());
      setCardsettings(await getAllSpaces());
    };

    fetchSpaces();
  }, []);

  return {
    filterAmenities,
    cardsettings,
  };
}
