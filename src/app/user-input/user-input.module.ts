import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';

import { NgModule } from "@angular/core";


@NgModule({
    declarations: [UserInputComponent],
    imports: [FormsModule],
    exports: [UserInputComponent],
})
export class UserInputModule {}