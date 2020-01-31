import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabledataService } from './service/table-data.service';
import { ColumnType } from './models/column';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnDestroy {
  loadService: any;

  data = {};
  isDataLoading = true;

  properties = {
    data: {
      thead: [
        {
          key: 'date',
          headerText: 'Date',
          isColumnDisplayed: true,
          type: ColumnType.DATE
        },
        {
          key: 'amount',
          headerText: 'Amount',
          isColumnDisplayed: true,
          type: ColumnType.FORMCONTROL
        },
        {
          key: 'phone',
          headerText: 'Phone',
          isColumnDisplayed: true,
          type: ColumnType.FORMCONTROL
        },
        {
          key: 'description',
          headerText: 'Description',
          isColumnDisplayed: true,
          type: ColumnType.FORMCONTROL
        },
        {
          key: 'status',
          headerText: 'Status',
          isColumnDisplayed: true,
          type: ColumnType.FORMCONTROL
        }
      ],
      rowId: 'id',
      formControl: [
        {
          key: 'status',
          formControlType: 'single-select',
          label: 'Status',
          isLabelVisible: true,
          placeholder: 'Select a status',
          readOnly: false,
          errorMessage: 'Please select a status',
          dropdownOptions: [
            { optionText: 'Deploying', optionValue: 'Deploying' },
            { optionText: 'Deployed', optionValue: 'Deployed' },
            { optionText: 'In Progress', optionValue: 'In Progress' },
            { optionText: 'Draft', optionValue: 'Draft' }
          ]
        },
        {
          key: 'amount',
          formControlType: 'single-select',
          label: 'Amount',
          isLabelVisible: false,
          placeholder: 'Select an amount',
          readOnly: false,
          errorMessage: 'Please select an amount',
          dropdownOptions: [
            { optionText: '1000', optionValue: 1000 },
            { optionText: '2000', optionValue: 2000 },
            { optionText: '3000', optionValue: 3000 },
            { optionText: '4000', optionValue: 4000 }
          ]
        },
        {
          key: 'phone',
          formControlType: 'text',
          label: 'Phone',
          isLabelVisible: false,
          placeholder: 'Please enter a value',
          readOnly: false,
          errorMessage: 'This field is required',
        },
        {
          key: 'description',
          formControlType: 'checkbox',
          label: 'Is Required',
          isLabelVisible: true
        }
      ]
    },
    search: {
      hasSearch: true
    },
    sort: {
      defaultSortedColumn: 'phone'
    },
    hasSelectableRows: true,
    hasExpandableRows: true,
    statusIndicatorMapping: {
      'incomplete-primary': 'Not Deployed',
      'incomplete-secondary': 'New Updates Not Deployed',
      'in-progress': 'Deploying',
      'warning': 'Deployment Error',
      'complete': 'Deployed'
    },
    link: {
      element: 'a',
      ariaLabel: 'go to Object ${id}',
      target: '',
      path: '/table/object'
    },
    actions: [
      {
        element: 'a',
        text: 'Edit',
        ariaLabel: 'Edit Object ${id}',
        class: 'btn-outline-primary',
        path: '/table/object/edit'
      },
      {
        element: 'button',
        text: 'Deploy',
        ariaLabel: 'Deploy Object ${id}',
        class: 'btn-outline-primary',
        action: 'deploy'
      },
      {
        element: 'button',
        text: 'Delete',
        ariaLabel: 'Delete Object ${id}',
        class: 'btn-outline-danger',
        action: 'delete'
      }
    ],
    hasColumnSelector: true,
    hasDisplayDensity: true,
    pagination: {
      hasPagination: true
    }
  };

  tableForm: FormGroup;

  constructor(
    private tableDataService: TabledataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadService = this.tableDataService.get_cuData().subscribe(res => {
      this.data = res.body.customerData.data;
      this.isDataLoading = false;
      this.addRow(res.body.customerData.data);
    });
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  handleSelectedRowsAction(selectedRowIds: Array<number>) {}

  buildForm(): void {
    this.tableForm = this.formBuilder.group({
      controlsList: this.formBuilder.array([])
    });
  }

  createFormRow(): FormGroup {
    const item = this.formBuilder.group({
      status: [
        {
          value: null,
          disabled: false
        },
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      amount: [
        {
          value: null,
          disabled: false
        },
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      phone: [
        {
          value: null,
          disabled: false
        },
        {
          validators: [
            Validators.required,
          ],
          updateOn: 'change'
        }
      ],
      description: [
        {
          value: null,
          disabled: true
        },
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ]
    });
    return item;
  }

  addRow(data): void {
    const controlsList = this.tableForm.get('controlsList') as FormArray;
    data.forEach(() => {
      controlsList.push(this.createFormRow());
    });
  }

  ngOnDestroy() {
    this.loadService.unsubscribe();
  }
}
