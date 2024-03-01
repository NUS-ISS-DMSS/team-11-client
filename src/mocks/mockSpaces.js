import space1p1 from "../assets/spaceAssets/billyspace1.jpeg";
import space1p2 from "../assets/spaceAssets/billyspace2.jpeg";
import space1p3 from "../assets/spaceAssets/billyspace3.jpeg";
import space2p1 from "../assets/spaceAssets/cafe1.jpeg";
import space2p2 from "../assets/spaceAssets/cafe2.jpeg";
import space2p3 from "../assets/spaceAssets/cafe3.jpeg";
import space4p1 from "../assets/spaceAssets/p1img1.png";
import space4p2 from "../assets/spaceAssets/p1img2.png";
import space4p3 from "../assets/spaceAssets/p1img3.png";

export const mockFilterKeywords = {
  keywords: [
    {
      _id: "1",
      label: "Wifi",
      value: "wifi",
    },
    {
      _id: "2",
      label: "Socket",
      value: "socket",
    },
    {
      _id: "3",
      label: "Parking",
      value: "parking",
    },
    {
      _id: "4",
      label: "Noisy",
      value: "noisy",
    },
    {
      _id: "5",
      label: "Toilet",
      value: "toilet",
    },
    {
      _id: "6",
      label: "Quiet",
      value: "quiet",
    },
  ],
};

export const mockSpaces = {
  spaces: [
    {
      id: "1",
      name: "Camaca Singapore",
      description:
        "Camaca specializes in sugar free and diabetic-friendly desserts ranging from gelators to cakes, chocolates and coffee.",
      address: "9 Queenstown #01-11 Singapore 598332",
      operatingHours: {
        start: "10:00",
        end: "10:00",
        daysClosed: ["None"],
      },
      contactNum: "61234567",
      station: "Queenstown",
      website: "wwww.noidea.com",
      reservationUrl: "http://example.com/reservation",
      keywords: ["Wifi", "Parking", "Socket"],
      images: [space4p1, space4p2, space4p3],
      createdAt: "04/08/2022",
    },
    {
      id: "2",
      name: "The M Plot",
      description:
        "The M Plot is a cozy spot where people gather to enjoy coffee, snacks, and conversation in a relaxed atmosphere.",
      address: "29 Toa Payoh #01-12 Singapore 223344",
      operatingHours: {
        start: "09:00",
        end: "09:00",
        daysClosed: ["Monday", "Tuesday"],
      },
      contactNum: "61233333",
      station: "Toa Payoh",
      website: "wwww.noidea.com",
      reservationUrl: "http://example.com/reservation",
      keywords: ["Noisy", "Wifi", "Toilet"],
      images: [space2p1, space2p2, space2p3],
      createdAt: "30/10/2022",
    },
    {
      id: "3",
      name: "D Library",
      description:
        "D Library is a community resource providing free access to books, information, and educational materials, fostering learning, exploration, and cultural enrichment for all.",
      address: "4 Punggol #02-33 Singapore 113342",
      operatingHours: {
        start: "10:00",
        end: "9:30",
        daysClosed: ["Sunday"],
      },
      contactNum: "63331111",
      station: "Punggol",
      website: "wwww.noidea.com",
      reservationUrl: "http://example.com/reservation",
      keywords: ["Quiet", "Wifi", "Toilet", "Socket"],
      images: [space1p1, space1p2, space1p3],
      createdAt: "12/04/2023",
    },
  ],
};
