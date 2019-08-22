import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
@Component({
  selector: 'app-item-two',
  templateUrl: './item-two.component.html',
  styleUrls: ['./item-two.component.less']
})
export class ItemTwoComponent implements OnInit {
  private status = [];
  private mystatus;
  constructor(private http:_HttpClient) { }

  ngOnInit() {
    let url='http://localhost:4200/assets/myjson/mydata.json';
    this.http.get(url).subscribe((res:any)=>{
      this.status=res.data1
      console.log(this.status)
    })
  }
  myUpload(e){
    console.log(e)
    let fileReader = new FileReader();
    fileReader.onload=()=>{
      console.log(fileReader.result)
    }
    // fileReader.readAsText(e.target.files[0], 'utf-8')
    fileReader.readAsText(e.target.files[0])
  }
}

