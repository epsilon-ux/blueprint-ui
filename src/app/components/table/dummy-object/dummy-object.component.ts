import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabledataService } from '../service/table-data.service';

@Component({
  selector: 'app-dummy-object',
  templateUrl: './dummy-object.component.html',
  styleUrls: ['./dummy-object.component.scss']
})
export class DummyObjectComponent implements OnInit {

  loadService;
  data;
  object;
  objectKeys;

  constructor(private route: ActivatedRoute, private tableDataService: TabledataService) {}

  ngOnInit() {
    this.loadService = this.tableDataService.get_cuData().subscribe(res => {
      this.data = res.body.customerData.data;
      this.route.paramMap.subscribe(params => {
        this.object = this.data.filter(d => d.id === +params.get('id'))[0];
        this.objectKeys = Object.keys(this.object);
      });
    });
  }

  ngOnDestroy() {
    this.loadService.unsubscribe();
  }
}