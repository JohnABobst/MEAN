import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
  objects: any;
  selectedObject: any;
  show: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getObjectsFromService()
  }
  getObjectsFromService(){
    let observable = this._httpService.getObjects()
    observable.subscribe((data:any) => {
      console.log(data)
      this.objects = data
    })
  }
  selectObject(index){
    this.show = 'show'
    this.selectedObject = this.objects[index]
  }
  deleteObject(id){
    console.log("Delete happened?")
    let observable = this._httpService.destroyObject(id)
    observable.subscribe(() => this.getObjectsFromService())
  }

}
