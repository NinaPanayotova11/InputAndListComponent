import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  items: {itemNumber: number, itemName: string}[] = [];
  count: number = 1;
  myFocusVar: boolean = false;
  itemWithBorder: number = NaN;
  start: number = 0;
  end: number = 10;
  isHidden: boolean = false;
  inputContent: string = '';

  ngDoCheck() {
    if(!this.myFocusVar){
      this.itemWithBorder = NaN;
    }
  }
  
  onSave() {
    let item = this.inputContent;
    this.items.unshift({itemNumber: this.count, itemName: item});
    this.count++;
    this.inputContent = '';
    this.itemWithBorder = NaN;
  }

  onMove(arrow: string){
    if(arrow === 'arrowdown' && isNaN(this.itemWithBorder) && this.myFocusVar){
      this.itemWithBorder = 0;
      this.inputContent = this.items[this.itemWithBorder].itemName;
    }else if(arrow === 'arrowdown' && !isNaN(this.itemWithBorder) && this.itemWithBorder < this.items.length-1){
      if(this.itemWithBorder + 1 !== this.end){
        this.itemWithBorder++;
      }
      this.inputContent = this.items[this.itemWithBorder].itemName;
    }else if(arrow === 'arrowup' && !isNaN(this.itemWithBorder) && this.itemWithBorder > 0){
      if(this.itemWithBorder !== this.start){
        this.itemWithBorder--;
      }
      this.inputContent = this.items[this.itemWithBorder].itemName;
    }
  }

  toggleDisplay(){
    this.isHidden = !this.isHidden;  
  }
}
