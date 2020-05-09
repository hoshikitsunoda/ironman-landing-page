export class Panel {
  constructor(
    public icon: string,
    public heading: string,
    public body: string
  ) {}
}

interface PanelData {
  icon: string
  heading: string
  body: string
}

export interface PanelItem {
  [key: string]: PanelData
}
