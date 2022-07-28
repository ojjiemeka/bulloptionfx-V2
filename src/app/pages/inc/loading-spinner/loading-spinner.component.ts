import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  
 /* A property that is being set to the value of the loading$ property in the LoadingService. */
  // loading$ = this.loader.loading$;

  showSpinner = false;
  
  constructor(
    private loader: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.init()
  }
  
  init(){
    this.loader.getLoader().subscribe(
      (status) =>{
        this.showSpinner = status === 'start';
        this.cdRef.detectChanges();
    })
  }

}
