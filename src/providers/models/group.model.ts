import { User } from "./user.model";
import { Ticket } from "./ticket.model";
export interface LotteryGroup {
    name: string;
    imgUrl: string;
    members: User[];
    tickets: Ticket[];
}