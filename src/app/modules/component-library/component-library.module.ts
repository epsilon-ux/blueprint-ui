import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, SearchModule, LandingPageHeaderModule } from 'epsilon-blueprint';

import { ComponentsRoutingModule } from './component-library-routing.module';
import { BaseTemplateModule } from 'src/app/shared/base-template/base-template.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';
import { TabledataService } from './library/table/service/table-data.service';
import { TableComponent } from './library/table/table.component';
import { DummyObjectComponent } from './library/table/dummy-object/dummy-object.component';
import { SearchComponent } from './library/search/search.component';


@NgModule({
  declarations: [
    ComponentLibraryComponent,
    OverviewComponent,
    TableComponent,
    DummyObjectComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateModule,
    ComponentHeaderModule,
    ComponentsRoutingModule,
    TableModule,
    SearchModule,
    LandingPageHeaderModule
  ],
  providers: [HttpClientModule, TabledataService],
  exports: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }
