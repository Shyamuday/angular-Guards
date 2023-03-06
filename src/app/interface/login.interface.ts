// enum position{
//     admin,
//     user
// }

import { FormControl } from "@angular/forms";

export interface Login {
    id?: string,
    email: string,
    position: string,
    password: string
}