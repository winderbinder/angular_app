import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "my first doc",
      description: "Download FREE RAM!!",
      file_url: "yo.com",
      updated_at: "suh dude updated",
      image_url: "https://support.apple.com/mac",
    },
    {
      title: "my second doc",
      description: "Download FREE RAM!!",
      file_url: "yo.com",
      updated_at: "suh dude updated",
      image_url: "https://support.apple.com/mac",
    },
    {
      title: "my third doc",
      description: "Download FREE RAM!!",
      file_url: "yo.com",
      updated_at: "suh dude updated",
      image_url: "https://support.apple.com/mac",
    },
  ]
}