import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-screen-shot',
  templateUrl: './file-screen-shot.component.html',
  styleUrls: ['./file-screen-shot.component.scss']
})
export class FileScreenShotComponent {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  handleFileInput(event: any): void {
    const file = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();

      reader.onload = () => {
        const dataUrl = reader.result as string;
        const pdfElement = document.createElement('iframe');

        pdfElement.src = dataUrl;
        // pdfElement.hidden = true;
        document.body.appendChild(pdfElement);

        pdfElement.onload = () => {
          const canvasElement = this.canvas.nativeElement;
          const context = canvasElement.getContext('2d');
          const pdfWindow = (pdfElement.contentWindow as any).window;
          const pdfDocument = pdfWindow.document;

          const pdfPage = pdfDocument.querySelector('.page') ;
          const pdfPageWidth = pdfPage.offsetWidth;
          const pdfPageHeight = pdfPage.offsetHeight;

          canvasElement.width = pdfPageWidth;
          canvasElement.height = pdfPageHeight;

          context?.clearRect(0, 0, pdfPageWidth, pdfPageHeight);
          context?.drawImage(pdfPage, 0, 0, pdfPageWidth, pdfPageHeight);

          // Optional: Convert canvas image to base64 or save it as an image file
          const screenshotDataUrl = canvasElement.toDataURL('image/png');
          console.log(screenshotDataUrl);

          document.body.removeChild(pdfElement);
        };
      };

      reader.readAsDataURL(file);
    }
  }
}
