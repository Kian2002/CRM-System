import { ReactNode } from "react";

export type DbRecord = {
      id: number;
      name: string;
      address: string;
      city: string;
      state: string;
      zipcode: number;
      date_created: ReactNode;
      phone: number;
      email: string;
  }[];