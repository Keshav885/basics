import { NgModule } from '@angular/core';
import { MinutesPipe } from './minutes/minutes';
@NgModule({
	declarations: [MinutesPipe],
	imports: [],
	exports: [MinutesPipe]
})
export class PipesModule {}
