import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-library',
  templateUrl: './icon-library.component.html',
  styleUrls: ['./icon-library.component.scss']
})
export class IconLibraryComponent implements OnInit {

  globalIcons = [
    {
      name: 'Arrow down',
      style: 'Solid',
      class: 'fas fa-arrow-down'
    },
    {
      name: 'Arrow up',
      style: 'Solid',
      class: 'fas fa-arrow-up'
    },
    {
      name: 'Calendar',
      style: 'Solid',
      class: 'fas fa-calendar-alt',
      variable: '$icon-calendar'
    },
    {
      name: 'Caret down',
      style: 'Solid',
      class: 'fas fa-caret-down',
      variable: '$icon-caret-down'
    },
    {
      name: 'Caret left',
      style: 'Solid',
      class: 'fas fa-caret-left',
      variable: '$icon-caret-left'
    },
    {
      name: 'Caret right',
      style: 'Solid',
      class: 'fas fa-caret-right',
      variable: '$icon-caret-right'
    },
    {
      name: 'Caret up',
      style: 'Solid',
      class: 'fas fa-caret-up',
      variable: '$icon-caret-up'
    },
    {
      name: 'Check',
      style: 'Solid',
      class: 'fas fa-check',
      variable: '$icon-checkmark'
    },
    {
      name: 'Check circle',
      style: 'Solid',
      class: 'fas fa-check-circle',
      variable: '$icon-check-circle'
    },
    {
      name: 'Chevron down',
      style: 'Solid',
      class: 'fas fa-chevron-down',
      variable: '$icon-chevron-down'
    },
    {
      name: 'Chevron left',
      style: 'Solid',
      class: 'fas fa-chevron-left'
    },
    {
      name: 'Chevron right',
      style: 'Solid',
      class: 'fas fa-chevron-right',
      variable: '$icon-chevron-right'
    },
    {
      name: 'Circle',
      style: 'Regular',
      class: 'far fa-circle'
    },
    {
      name: 'Circle',
      style: 'Solid',
      class: 'fas fa-circle'
    },
    {
      name: 'Clock',
      style: 'Solid',
      class: 'fas fa-clock',
      variable: '$icon-clock'
    },
    {
      name: 'Close',
      style: 'Solid',
      class: 'fas fa-times',
      variable: '$icon-close'
    },
    {
      name: 'Copyright',
      style: 'Regular',
      class: 'far fa-copyright'
    },
    {
      name: 'Edit',
      style: 'Solid',
      class: 'fas fa-pencil-alt'
    },
    {
      name: 'External link',
      style: 'Solid',
      class: 'fas fa-external-link-alt'
    },
    {
      name: 'Filter',
      style: 'Solid',
      class: 'fas fa-filter'
    },
    {
      name: 'First page',
      style: 'Solid',
      class: 'fas fa-angle-double-left',
      variable: '$icon-first-page'
    },
    {
      name: 'Last page',
      style: 'Solid',
      class: 'fas fa-angle-double-right',
      variable: '$icon-last-page'
    },
    {
      name: 'Lock',
      style: 'Solid',
      class: 'fas fa-lock'
    },
    {
      name: 'Menu',
      style: 'Solid',
      class: 'fas fa-bars',
      variable: '$icon-menu'
    },
    {
      name: 'More actions',
      style: 'Solid',
      class: 'fas fa-ellipsis-h'
    },
    {
      name: 'Next page',
      style: 'Solid',
      class: 'fas fa-angle-right',
      variable: '$icon-next-page'
    },
    {
      name: 'Plus',
      style: 'Solid',
      class: 'fas fa-plus'
    },
    {
      name: 'Plus circle',
      style: 'Solid',
      class: 'fas fa-plus-circle'
    },
    {
      name: 'Previous page',
      style: 'Solid',
      class: 'fas fa-angle-left',
      variable: '$icon-previous-page'
    },
    {
      name: 'Product switcher',
      style: 'Solid',
      class: 'fas fa-ellipsis-v'
    },
    {
      name: 'Question',
      style: 'Solid',
      class: 'fas fa-question'
    },
    {
      name: 'Search',
      style: 'Solid',
      class: 'fas fa-search'
    },
    {
      name: 'Spinner',
      style: 'Solid',
      class: 'fas fa-spinner fa-spin'
    },
    {
      name: 'Trash',
      style: 'Solid',
      class: 'fas fa-trash-alt'
    },
    {
      name: 'View',
      style: 'Solid',
      class: 'fas fa-eye'
    },
    {
      name: 'Warning',
      style: 'Solid',
      class: 'fas fa-exclamation-circle',
      variable: '$icon-warning'
    }
  ];

  statusIndicatorIcons = [
    {
      name: 'Incomplete primary',
      class: 'status-icon incomplete-primary'
    },
    {
      name: 'Incomplete secondary',
      class: 'status-icon incomplete-secondary'
    },
    {
      name: 'Complete',
      class: 'status-icon complete'
    },
    {
      name: 'Warning',
      class: 'status-icon warning'
    }
  ];

  customerIcons = [
    {
      name: 'Edit secondary',
      style: 'Solid',
      class: 'fas fa-edit'
    },
    {
      name: 'Expand',
      style: 'Solid',
      class: 'fas fa-expand-alt'
    },
    {
      name: 'Sort amount down',
      style: 'Solid',
      class: 'fas fa-sort-amount-down'
    }
  ];

  dataHubIcons = [
    {
      name: 'Arrow circle right',
      style: 'Solid',
      class: 'fas fa-arrow-circle-right'
    },
    {
      name: 'Heart',
      style: 'Regular',
      class: 'far fa-heart'
    },
    {
      name: 'Heart',
      style: 'Solid',
      class: 'fas fa-heart'
    }
  ];

  loyaltyGeneralIcons = [
    {
      name: 'Check circle',
      style: 'Regular',
      class: 'far fa-check-circle',
      variable: '$icon-check-circle'
    },
    {
      name: 'Minus',
      style: 'Solid',
      class: 'fas fa-minus',
      variable: '$icon-dash'
    },
    {
      name: 'Star',
      style: 'Solid',
      class: 'fas fa-star'
    }
  ];

  loyaltyCustomerBannerIcons = [
    {
      name: 'At symbol',
      style: 'Solid',
      class: 'fas fa-at'
    },
    {
      name: 'Birthday cake',
      style: 'Solid',
      class: 'fas fa-birthday-cake'
    },
    {
      name: 'Calendar',
      style: 'Solid',
      class: 'fas fa-calendar-alt',
      variable: '$icon-calendar'
    },
    {
      name: 'Card number',
      style: 'Solid',
      class: 'fas fa-address-card'
    },
    {
      name: 'Map marker',
      style: 'Solid',
      class: 'fas fa-map-marker-alt'
    },
    {
      name: 'Phone',
      style: 'Solid',
      class: 'fas fa-phone'
    }
  ];

  loyaltyCustomerSegmentIcons = [
    {
      name: 'Convert',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-convert.svg'
    },
    {
      name: 'Engage',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-engage.svg'
    },
    {
      name: 'Generic',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-generic.svg'
    },
    {
      name: 'Grow',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-grow.svg'
    },
    {
      name: 'Maintain',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-maintain.svg'
    },
    {
      name: 'New',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-new.svg'
    },
    {
      name: 'No purchase',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-no-purchase.svg'
    },
    {
      name: 'Protect',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-protect.svg'
    },
    {
      name: 'Generic',
      style: 'SVG',
      src: 'assets/icons/customer-segments/icon-win-back.svg'
    }
  ];

  marketingIcons = [
    {
      name: 'Auction',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-auction.svg'
    },
    {
      name: 'Badges',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-badges.svg'
    },
    {
      name: 'Birthday',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-birthday.svg'
    },
    {
      name: 'Campaign',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-campaign.svg'
    },
    {
      name: 'Certificate',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-certificate.svg'
    },
    {
      name: 'Challenge',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-challenge.svg'
    },
    {
      name: 'Communication',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-communication.svg'
    },
    {
      name: 'Gamification',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-gamification.svg'
    },
    {
      name: 'Mobile push',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-mobile-push.svg'
    },
    {
      name: 'Newsletter',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-newsletter.svg'
    },
    {
      name: 'No channel',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-no-channel.svg'
    },
    {
      name: 'Offer',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-offer.svg'
    },
    {
      name: 'Online message',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-online-message.svg'
    },
    {
      name: 'Program anniversary',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-program-anniversary.svg'
    },
    {
      name: 'Reward',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-reward.svg'
    },
    {
      name: 'SMS',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-sms.svg'
    },
    {
      name: 'Store opening',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-store-opening.svg'
    },
    {
      name: 'Survey',
      style: 'SVG',
      src: 'assets/icons/marketing-promotions/icon-survey.svg'
    }
  ];

  messagingGeneralIcons = [
    {
      name: 'Arrow right',
      style: 'Solid',
      class: 'fas fa-arrow-right'
    },
    {
      name: 'Cog',
      style: 'Solid',
      class: 'fas fa-cog'
    },
    {
      name: 'Download',
      style: 'Solid',
      class: 'fas fa-download'
    },
    {
      name: 'Folder',
      style: 'Solid',
      class: 'fas fa-folder'
    },
    {
      name: 'Folder open',
      style: 'Solid',
      class: 'fas fa-folder-open'
    },
    {
      name: 'List',
      style: 'Solid',
      class: 'fas fa-list-ul'
    },
    {
      name: 'Minus circle',
      style: 'Solid',
      class: 'fas fa-minus-circle'
    },
    {
      name: 'Table',
      style: 'Solid',
      class: 'fas fa-table'
    },
    {
      name: 'Tag',
      style: 'Solid',
      class: 'fas fa-tag'
    },
    {
      name: 'th',
      style: 'Solid',
      class: 'fas fa-th'
    },
    {
      name: 'Upload',
      style: 'Solid',
      class: 'fas fa-upload'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}