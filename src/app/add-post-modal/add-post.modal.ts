import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalController} from '@ionic/angular';
import SwiperCore, {EffectFade, Navigation, Pagination, SwiperOptions} from 'swiper';

//import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([/*IonicSwiper,*/EffectFade, Navigation, Pagination]);

@Component({
    selector: 'add-post-modal',
    templateUrl: 'add-post.modal.html',
    styleUrls: ['add-post.modal.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddPostModal implements OnInit {

    @Input()
    selectedPicturesURI: Array<string>;
    caption: string = '';
    captionFilled: boolean = false;

    slideOpts = {
        speed: 400
    };

    constructor(private modalController: ModalController,

    ) {
    }

    async dismiss() {
        await this.modalController.dismiss();
    }

    ngOnInit(): void {
    }


}
