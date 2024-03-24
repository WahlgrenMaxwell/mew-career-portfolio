import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  pdfSource: string = '../assets/files/resume-2023.pdf'

  cvWindow() {
    window.open(this.pdfSource, '_blank');
  }
}
