import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, SearchModule } from 'epsilon-blueprint';

import { ComponentsRoutingModule } from './components-routing.module';
import { BaseTemplateModule } from 'src/app/shared/base-template/base-template.module';
import { LandingPageHeaderModule } from 'src/app/shared/landing-page-header/landing-page-header.module';

import { ComponentsComponent } from './components.component';
import { OverviewComponent } from './overview/overview.component';
import { TabledataService } from './library/table/service/table-data.service';
import { TableComponent } from './library/table/table.component';
import { DummyObjectComponent } from './library/table/dummy-object/dummy-object.component';
import { SearchComponent } from './library/search/search.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    OverviewComponent,
    TableComponent,
    DummyObjectComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateModule,
    LandingPageHeaderModule,
    ComponentsRoutingModule,
    TableModule,
    SearchModule
  ],
  providers: [HttpClientModule, TabledataService],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
