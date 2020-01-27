import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TableModule, SearchModule } from 'epsilon-blueprint';


import { AppComponent } from './app.component';
import { ContentTemplateComponent } from './shared/content-template/content-template.component';
import { LibraryDocsComponent } from './library-docs/library-docs.component';
import { TabledataService } from './components/table/service/table-data.service';
import { TableComponent } from './components/table/table.component';
import { DummyObjectComponent } from './components/table/dummy-object/dummy-object.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentTemplateComponent,
    LibraryDocsComponent,
    TableComponent,
    DummyObjectComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    SearchModule
  ],
  providers: [HttpClientModule, TabledataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
