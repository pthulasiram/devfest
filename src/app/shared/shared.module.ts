import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { FirebaseService } from '../shared/firebase.service';
import { CustomPipesModule } from '../shared/custom-components.module';
import { GetSpeakerPipe } from './get-speaker.pipe';
import { ArrayOrMapPipe } from './array-or-map.pipe';


@NgModule({
    declarations: [
        GetSpeakerPipe,
        ArrayOrMapPipe,
    ],
    providers: [
        AuthService,
        DataService,
        FirebaseService,
    ],
    imports: [
        CustomPipesModule,
        CommonModule,
    ],
    exports: [
        CustomPipesModule,
        GetSpeakerPipe,
        ArrayOrMapPipe,
    ],
})
export class SharedModule { }
