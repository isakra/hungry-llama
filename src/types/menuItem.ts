export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: "starters" | "main-course" | "sandwiches" | "sides";
  }
  