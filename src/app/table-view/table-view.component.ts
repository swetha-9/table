import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/appstate';
import { bloglist } from 'src/app/store/blogstate';
import { LoadBlogListAction } from "src/app/store/action/bloglist.action";
import { getbloglists, getbloglistsLoading, getbloglistsLoadingerror } from 'src/app/store/selector/bloglist.selector';
import { MatPaginator } from '@angular/material/paginator';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { TranslateService } from '@ngx-translate/core'; 
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  bloglist$: Observable<Array<bloglist>>;
  res$: any
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  dataSource: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  edit = true;
  editid: any;
  editauthor: any;
  edittitle: any;
  deleterow: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  component: { id: string; author: string; title: string; description: string; }[];
  constructor(private store: Store<AppState>, private blogservice: BlogService,
    private router: Router, private dialog: MatDialog,  public translate: TranslateService) {
      
      translate.addLangs(['en', 'sp']);  
      if (localStorage.getItem('locale')) {  
        const browserLang = localStorage.getItem('locale');  
        translate.use(browserLang.match(/en|sp/) ? browserLang : 'en');  
      }
    }  
  

  ngOnInit() {
    this.bloglist$ = this.store.select(getbloglists);
    this.loading$ = this.store.select(getbloglistsLoading);
    this.error$ = this.store.select(getbloglistsLoadingerror);
    this.store.dispatch(new LoadBlogListAction());
    this.bloglist$.subscribe((res: any) => {
      this.dataSource = res;
      this.array = res
      this.totalSize = this.array.length;
      //Sorting
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.iterator();
  }

  //Columne Name
  displayedColumns: string[] = ['id', 'author', 'title', 'action'];
  columnsToDisplay: string[] = this.displayedColumns;
  //Pagination
  public iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
    this.ngOnInit();
  }
  //Delete Row with DailogBox
  public removeAt(id) {
    const dialogRef = this.dialog.open(DialogboxComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'true') {
        this.blogservice.deleteItem(id)
          .subscribe((response: any) => {
            this.dataSource = response;
            this.ngOnInit();
          })
      }
    });
  }

  //edit Row
  public editAt(value) {
    this.editid = value.id
    this.editauthor = value.author
    this.edittitle = value.title
    this.edit = false
  }
  //Update Row
  public editSave(editedauthor, editedtitle) {
    var item = { author: editedauthor, title: editedtitle }
    this.blogservice.updateItem(this.editid, item)
      .subscribe((res: any) => {
        this.dataSource = res;
        this.cancel();
      })
  }
  public cancel() {
    this.ngOnInit();
    this.edit = true;
  }
  //Sorting Type
  public sortData(e) {
    console.log(e)
  }
  //Search Filter
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //View Details of Selected ID
  public ViewAt(element) {
    console.log(element.id)
    var id=element.id
    console.log(element.description)
    this.router.navigate(['tableview',id],{state: {data: element.description}})
  }
}
