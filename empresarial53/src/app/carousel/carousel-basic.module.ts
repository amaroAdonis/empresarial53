import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselBasic } from './carousel-basic';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [NgbModule, CommonModule],
	declarations: [NgbdCarouselBasic],
	exports: [NgbdCarouselBasic],
	
})
export class NgbdCarouselBasicModule {}