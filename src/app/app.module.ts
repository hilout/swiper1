import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { IonicModule } from "@ionic/angular";
import {AddPostModal} from "./add-post-modal/add-post.modal";

@NgModule({
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    SwiperModule
  ],
  declarations: [AppComponent, AddPostModal],
  bootstrap: [AppComponent],
  entryComponents: [AddPostModal]
})
export class AppModule {}
