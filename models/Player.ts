import { ObjectId } from "mongodb";

export type Gender = "male" | "female";
export type Category = "overall" | "serve" | "attack" | "block";

export interface Player {
  _id?: ObjectId;
  number: string;      // 👈 ТОГЛОГЧИЙН ДУГААР (#19 гэх мэт)
  name: string;
  team: string;
  value: number;
  avatar: string;
  gender: Gender;
  category: Category;
}
