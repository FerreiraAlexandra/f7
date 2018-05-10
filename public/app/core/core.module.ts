import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { DataService } from './data.service';
import { DataFilterService } from './data-filter.service';
import { Sorter } from './sorter';
import { TrackByService } from './trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

@NgModule({
  imports: [ 
    HttpClientModule, 
  ],
  providers: [ DataService, DataFilterService, Sorter, TrackByService] 
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}
