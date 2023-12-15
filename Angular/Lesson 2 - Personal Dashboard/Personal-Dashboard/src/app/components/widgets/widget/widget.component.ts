import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { widgetMapping } from 'src/app/utils/widget-mapping';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @ViewChild('widgetContainer', { read: ViewContainerRef, static: true })
  container?: ViewContainerRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const widgetName = params.get('widgetName');
      this.loadWidgetComponent(widgetName as string);
    });
  }

  private loadWidgetComponent(widgetName: string) {
    const componentClass = widgetMapping[widgetName];
    if (componentClass) {
      this.container?.clear();
      this.container?.createComponent(componentClass);
    } else {
      console.error(`No component found for widget: ${widgetName}`);
      // Handle unknown widget case
    }
  }
}
