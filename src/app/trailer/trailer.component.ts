import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  safeUrl: any;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<TrailerComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.url}`);
  }

  ngOnInit(): void {
  }

}
