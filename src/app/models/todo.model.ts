export class TodoModel {
  completed: boolean;
  title: string;
  private textProp: string;
  archive: boolean;

  get text() {
    return this.textProp;
  }
  set text(value: String) {
    this.textProp = value.trim();
  }

  constructor(text: String) {
    this.completed = false;
    this.textProp = text.trim();
  }
}
