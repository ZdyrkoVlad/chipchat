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
    console.log('event', event);
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = (event1: any) => {
          this.urls.push(event1.target.result);
        };
        if (event.target.files[i].type !== 'image/webp') {
          reader.readAsDataURL(event.target.files[i]);
        } else {
          reader.readAsDataURL(event.target.files[i]);
        }

      }
      this.emitValue();

    }
  }

  emitValue(): void {

    this.fileEvent.emit(this.urls);
  }

  ngOnInit(): void {}

}
