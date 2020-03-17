import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bp-voice-tone',
    templateUrl: './voice-tone.component.html',
    styleUrls: ['./voice-tone.component.scss']
})

export class VoiceToneComponent implements OnInit {
    
    @Input()
    headingText: string;
  
    @Input()
    actionText: string;

    constructor() { }

    ngOnInit() { }

}