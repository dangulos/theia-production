import { Component, OnInit } from '@angular/core';
import { UserData } from '../../providers/user-data';
import {TheiaSpaceService} from '../../providers/services/theia-space.service'  


@Component({
  selector: 'app-theia-space',
  templateUrl: './theia-space.page.html',
  styleUrls: ['./theia-space.page.scss'],
})
export class TheiaSpacePage implements OnInit {

  constructor(public userData: UserData, public theiaService: TheiaSpaceService) { }

  ngOnInit() {
    this.userData.signup("test").then(data =>{
      console.log(data);
    })
    this.theiaService.test();
  }
}
