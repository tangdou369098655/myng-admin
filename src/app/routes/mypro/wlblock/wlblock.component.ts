import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import Clipboard from '../../../../clipboard.min.js';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';


@Component({
  selector: 'app-wlblock',
  templateUrl: './wlblock.component.html',
  styleUrls: ['./wlblock.component.less']
})
export class WlblockComponent implements OnInit {
  private status = [];
  private mystatus;
  private myData2;
  private myData;
  private myBlackBoxChange:boolean = false;
  isLoadingTwo = false;

  private myinputValue;
  constructor(private http:_HttpClient ) { }

  ngOnInit() {//初始化时候，异步请求服务器端的首页数据
    let url='http://localhost:4200/assets/myjson/mydata.json';
    this.http.get(url).subscribe((res:any)=>{
      this.status=res.data1
      console.log(this.status)
    })
  }
  myclick(e:MouseEvent){
    e.preventDefault();
    console.log(e)
  }
  getData1(e){
    var clipboard = new Clipboard('btn');
 
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});
 
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
  }
  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
    console.log(this.myinputValue)
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
