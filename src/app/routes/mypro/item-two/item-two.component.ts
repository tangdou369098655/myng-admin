import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { STColumn, STPage, STComponent } from '@delon/abc';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-item-two',
  templateUrl: './item-two.component.html',
  styleUrls: ['./item-two.component.less']
})
export class ItemTwoComponent implements OnInit ,AfterViewInit, OnDestroy{
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
  private destroy$ = new Subject();
  @ViewChild('st', { static: false }) st: STComponent;

  page: STPage = {
    front: false,
    show: false,
  };
  data: any[] = Array(2000)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        price: ~~(Math.random() * 100),
        price2:'sffsfsdfsdfsdfsdfsdfsdfsd'
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 100 },
    { title: '价格1', index: 'price2', width: 100 },
    { title: '价格2', index: 'price', width: 100 },
    { title: '价格3', index: 'price', width: 100 },
    { title: '价格4', index: 'price', width: 100 },
    { title: '价格5', index: 'price', width: 100 },
    { title: '价格6', index: 'price', width: 100 },
    { title: '价格7', index: 'price', width: 100 },
    { title: '价格8', index: 'price', width: 100 },
    { title: '价格9', index: 'price', width: 100 },
    { title: '价格10', index: 'price', width: 100 },
  ];

  scrollToIndex(index: number): void {
    this.st.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  ngAfterViewInit(): void {
    this.st.cdkVirtualScrollViewport.scrolledIndexChange.pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('scroll index to', data);
      
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


