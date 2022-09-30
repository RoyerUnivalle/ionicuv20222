import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4RoutingModule } from './tab4-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Tab4RoutingModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
  ]
})
export class Tab4Module { }
