import { Component, OnInit } from '@angular/core';

import { Board } from '../_models/index';
import { FourChanService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'fourchan.component.html'
})

export class FourChanComponent implements OnInit {
    //boards: Board[] = [];
    
    constructor(private fourChanService: FourChanService) {
    }

    ngOnInit() {
        this.loadAllBoards();
    }
    
    private loadAllBoards() {
        // .subscribe(boards => { this.boards = boards; })
        console.log(this.fourChanService.getBoards().subscribe(res => res));
    }
}