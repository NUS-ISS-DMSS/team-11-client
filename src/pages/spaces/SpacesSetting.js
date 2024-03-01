import { useState, useEffect } from "react";
import {mockFilterKeywords} from "../../mocks/mockResults";

export default function SpacesSetting() {
  const [filterkeywords, setFilterkeywords] = useState([]);

  useEffect(() => {
    setFilterkeywords(mockFilterKeywords.keywords);
  }, []);

  return {
    filterkeywords,
  };
}
