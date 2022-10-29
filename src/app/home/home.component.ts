import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  globalIndex: number = -1;
  isOpenedDropD: boolean = false;
  popupActive: boolean = false;
  form: FormGroup;
  arrSecond: any[] = [];
  arrGlob: any[] = [
    {
      name: 'Organization name 1',
      trackingFirst: 100,
      trackingSecond: 200,
      protectionFirst: 244,
      protectionSecond: 555,
    },
    {
      name: 'Organization name 2',
      trackingFirst: 200,
      trackingSecond: 300,
      protectionFirst: 1244,
      protectionSecond: 55,
    },
    {
      name: 'Organization name 3',
      trackingFirst: 10,
      trackingSecond: 20,
      protectionFirst: 12,
      protectionSecond: 32,
    },
    {
      name: 'Organization name 4',
      trackingFirst: 10,
      trackingSecond: 50,
      protectionFirst: 14,
      protectionSecond: 33,
    },
    {
      name: 'Organization name 5',
      trackingFirst: 9,
      trackingSecond: 44,
      protectionFirst: 53,
      protectionSecond: 9,
    },
  ]
  firstV: any = '';
  secondV: any = '';
  thirdV: any = '';
  fourthV: any = '';
  fifthV: any = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      search: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.arrSecond = [...this.arrGlob]
  }

  showHelp($event: MouseEvent) {
    this.popupActive = true;
  }

  openDrop(index: number) {
    this.globalIndex = index;
    this.isOpenedDropD = !this.isOpenedDropD;
  }

  counter(value: number, bool: boolean, index: number, last: any) {
    if (bool && last === 'first') {
      value = value + 1;
      this.arrGlob[index].trackingSecond = value
    } else if (!bool && last === 'first') {
      value = value - 1;
      this.arrGlob[index].trackingSecond = value
    } else if (bool && last === 'second') {
      value = value + 1;
      this.arrGlob[index].protectionSecond = value
    } else if (!bool && last === 'second') {
      value = value - 1;
      this.arrGlob[index].protectionSecond = value
    }
  }

  save($event: MouseEvent) {
    const obj = {
      name: this.firstV,
      trackingFirst: +this.secondV,
      trackingSecond: +this.thirdV,
      protectionFirst: +this.fourthV,
      protectionSecond: +this.fifthV,
    }
    this.arrGlob.push(...[obj]);
    this.arrSecond.push(...[obj]);
    this.popupActive = false;
    this.firstV = '';
    this.secondV = 0;
    this.thirdV = 0;
    this.fourthV = 0;
    this.fifthV = 0;
  }

  delete(i: number) {
    this.arrGlob.splice(i, 1);
  }

  search() {
    let search = this.form.value.search
    this.arrGlob = [...this.arrSecond];
    let result = this.arrGlob.filter((item: any) => item.name.toLowerCase().includes(this.form.value.search.toLowerCase()))
    this.arrGlob = [...result];
  }
}
