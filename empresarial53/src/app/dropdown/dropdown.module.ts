import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownComponent } from './dropdown.component';

@NgModule({
	imports: [NgbModule],
	declarations: [DropdownComponent],
	exports: [DropdownComponent],
	bootstrap: [DropdownComponent],
})
export class DropdownModule {}