import space1p1 from "../assets/spaceAssets/billyspace1.jpeg";
import space1p2 from "../assets/spaceAssets/billyspace2.jpeg";
import space1p3 from "../assets/spaceAssets/billyspace3.jpeg";
import space2p1 from "../assets/spaceAssets/cafe1.jpeg";
import space2p2 from "../assets/spaceAssets/cafe2.jpeg";
import space2p3 from "../assets/spaceAssets/cafe3.jpeg";

export const mockAccount = {
  users: [
    {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      password: "ass",
      listingsPosted: [
        {
          id: "1",
          name: "Camaca Singapore",
          description:
            "Camaca specializes in sugar free and diabetic-friendly desserts ranging from gelators to cakes, chocolates and coffee.",
          address: "9 Queenstown #01-11 Singapore 598332",
          operatingHours_start: "10:00",
          operatingHours_end: "10:00",
          daysClosed: "None",
          contactNum: "61234567",
          station: "Queenstown",
          keywords: "Wifi, Parking, Socket",
          images: [space1p1, space1p2, space1p3],
          createdAt: "04/08/2022",
        },
      ],
    },
    {
      id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com",
      password: "asd",
      listingsPosted: [
        {
          id: "1",
          name: "Camaca Singapore",
          description:
            "Camaca specializes in sugar free and diabetic-friendly desserts ranging from gelators to cakes, chocolates and coffee.",
          address: "9 Queenstown #01-11 Singapore 598332",
          operatingHours_start: "10:00",
          operatingHours_end: "10:00",
          daysClosed: "None",
          contactNum: "61234567",
          station: "Queenstown",
          keywords: "Wifi, Parking, Socket",
          images: [space1p1, space1p2, space1p3],
          createdAt: "04/08/2022",
        },
        {
          id: "2",
          name: "The M Plot",
          description:
            "The M Plot is a cozy spot where people gather to enjoy coffee, snacks, and conversation in a relaxed atmosphere.",
          address: "29 Toa Payoh #01-12 Singapore 223344",
          operatingHours_start: "09:00",
          operatingHours_end: "09:00",
          daysClosed: "Monday, Tuesday",
          contactNum: "61233333",
          station: "Toa Payoh",
          keywords: "Noisy, Wifi, Toilet",
          images: [space2p1, space2p2, space2p3],
          createdAt: "30/10/2022",
        },
      ],
    },
  ],
};
