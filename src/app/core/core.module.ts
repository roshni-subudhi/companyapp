import { NgModule } from '@angular/core';
import { AuthService} from './auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class CoreModule { }