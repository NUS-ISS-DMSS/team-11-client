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
      operate_hour_st: "10:00",
      operate_hour_et: "10:00",
      days_closed: "None",
      contact_num: "61234567",
      station: "Queenstown",
      amenities: ["Wifi", "Parking", "Socket"],
      images: "",
      createdAt: "04/08/2022",
    },
    {
      id: "2",
      name: "The M Plot",
      description:
        "The M Plot is a cozy spot where people gather to enjoy coffee, snacks, and conversation in a relaxed atmosphere.",
      address: "29 Toa Payoh #01-12 Singapore 223344",
      operate_hour_st: "09:00",
      operate_hour_et: "09:00",
      days_closed: "Monday, Tuesday",
      contact_num: "61233333",
      station: "Toa Payoh",
      amenities: ["Noisy", "Wifi", "Toilet"],
      images: "",
      createdAt: "30/10/2022",
    },
    {
      id: "3",
      name: "D Library",
      description:
        "D Library is a community resource providing free access to books, information, and educational materials, fostering learning, exploration, and cultural enrichment for all.",
      address: "4 Punggol #02-33 Singapore 113342",
      operate_hour_st: "10:00",
      operate_hour_et: "09:30",
      days_closed: "Sunday",
      contact_num: "63331111",
      station: "Punggol",
      amenities: ["Quiet", "Wifi", "Toilet", "Socket"],
      images: "",
      createdAt: "12/04/2023",
    },
  ],
};
