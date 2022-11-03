import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  name = 'Angular 4';
  urls: any[] = [];
  @Output() fileEvent = new EventEmitter<any[]>();

  onSelectFile(event: any): void {

    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = (event1: any) => {
          this.urls.push(event1.target.result);
          console.log(event1.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);

      }
      this.emitValue();

    }
  }

  emitValue(): void {

    this.fileEvent.emit(this.urls);
  }

  deleteFromList(index: number): void {

    this.urls.splice(index, 1);
    this.emitValue();
  }

  ngOnInit(): void {}

}
