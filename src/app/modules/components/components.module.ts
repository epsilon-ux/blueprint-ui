import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, SearchModule } from 'epsilon-blueprint';

import { ComponentsRoutingModule } from './components-routing.module';

import { ContentTemplateComponent } from '../../shared/content-template/content-template.component';
import { ComponentsComponent } from './components.component';
import { TabledataService } from './table/service/table-data.service';
import { TableComponent } from './table/table.component';
import { DummyObjectComponent } from './table/dummy-object/dummy-object.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ContentTemplateComponent,
    ComponentsComponent,
    TableComponent,
    DummyObjectComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TableModule,
    SearchModule
  ],
  providers: [HttpClientModule, TabledataService],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
