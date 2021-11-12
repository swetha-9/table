import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewauthordetails',
  templateUrl: './viewauthordetails.component.html',
  styleUrls: ['./viewauthordetails.component.css']
})
export class ViewauthordetailsComponent implements OnInit {
data:any
description:any
constructor(public router: Router, public route: ActivatedRoute){}


  ngOnInit(){

  this.description=history.state.data

}
}