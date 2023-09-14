import { Component } from '@angular/core';

@Component({ 
    selector: 'ngbd-carousel-basic', 
    templateUrl: './carousel-basic.html',
    styleUrls: ['./carousel-basic.scss']
})
export class NgbdCarouselBasic {
	images = ["05.JPG", "01.JPG", "02.JPG", "03.JPG", "04.JPG", "07.JPG"].map((n) => `/assets/imgs/${n}`);
}