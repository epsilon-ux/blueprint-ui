import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../../../components/collapsible-panel/collapsible-panel.component.scss']
})
export class UsageComponent implements OnInit {

  businessUnits = [
    {
      text: 'Business Unit 1'
    },
    {
      text: 'Business Unit 2'
    },
    {
      text: 'Business Unit 3'
    }
  ];
  selectedBusinessUnit;

  parents = [
    {
      text: 'Parent 1'
    },
    {
      text: 'Parent 2'
    },
    {
      text: 'Parent 3'
    }
  ];
  selectedParent;

  tenants = [
    {
      text: 'Tenant 1'
    },
    {
      text: 'Tenant 2'
    },
    {
      text: 'Tenant 3'
    }
  ];
  selectedTenant;

  customerHelpDropdownItems = [
    {
      text: 'Documentation',
      href: '#',
      target: '_blank'
    },
    {
      isDivider: true
    },
    {
      plainText: 'Version 00.00.01'
    }
  ]

  dataHubAccountDropdownItems = [
    {
      plainText: 'Username'
    },
    {
      text: 'Change Password',
      action: 'click'
    },
    {
      text: 'Log Out',
      action: 'click'
    }
  ]

  eventsHelpDropdownItems = [
    {
      text: 'Documentation',
      href: '#',
      target: '_blank'
    },
    {
      isDivider: true
    },
    {
      plainText: 'Version 00.00.01'
    }
  ]

  eventsAccountDropdownItems = [
    {
      plainText: 'Username'
    },
    {
      text: 'Log Out',
      action: 'click'
    }
  ]

  iqAccountDropdownItems = [
    {
      plainText: 'Username'
    },
    {
      text: 'Log Out',
      action: 'click'
    }
  ]

  loyaltyProgramSetupDropdownItems = [
    {
      text: 'Batch',
      bpRouterLink: './demo'
    },
    {
      text: 'Momentum',
      bpRouterLink: './demo'
    },
    {
      text: 'Program Management',
      bpRouterLink: './demo'
    }
  ];

  loyaltyLangDropdownItems = [
    {
      text: 'English (UK)',
      action: 'click',
      lang: 'en-gb'
    },
    {
      text: 'English (US)',
      action: 'click',
      lang: 'en-us'
    },
    {
      text: 'Français (CA)',
      action: 'click',
      lang: 'fr-ca'
    },
    {
      text: 'Français (FR)',
      action: 'click',
      lang: 'fr-fr'
    },
    {
      text: 'Deutsche (DE)',
      action: 'click',
      lang: 'de-de'
    },
    {
      text: 'Português (PT)',
      action: 'click',
      lang: 'pt-pt'
    },
    {
      text: 'Español (ES)',
      action: 'click',
      lang: 'es-es'
    }
  ]

  loyaltyHelpDropdownItems = [
    {
      text: 'Documentation',
      href: '#',
      target: '_blank'
    },
    {
      isDivider: true
    },
    {
      plainText: 'Version 00.00.01'
    }
  ]

  loyaltyAccountDropdownItems = [
    {
      plainText: 'Username'
    },
    {
      text: 'Change Password',
      action: 'click'
    },
    {
      text: 'Log Out',
      action: 'click'
    }
  ]

  messagingCustomersDropdownItems =
  [
    {
      text: 'Customer Profile Table',
      bpRouterLink: './demo'
    },
    {
      isDivider: true
    },
    {
      text: 'Customer History',
      bpRouterLink: './demo'
    }
  ]

  messagingHelpDropdownItems = [
    {
      text: 'Documentation',
      href: '#',
      target: '_blank'
    },
    {
      isDivider: true
    },
    {
      plainText: 'Version 00.00.01'
    }
  ]

  messagingAccountDropdownItems = [
    {
      plainText: 'Username'
    },
    {
      text: 'Change Password',
      action: 'click'
    },
    {
      text: 'Log Out',
      action: 'click'
    }
  ]

  messagingSettingsDropdownItems =
  [
    {
      text: 'Business Unit Settings',
      bpRouterLink: './demo'
    },
    {
      text: 'Folder Management',
      bpRouterLink: './demo'
    },
    {
      text: 'Service Level Agreements (SLA) Dashboard',
      bpRouterLink: './demo'
    }
  ]

  constructor() { }

  ngOnInit(): void { }

}
