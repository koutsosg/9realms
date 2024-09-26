export interface SectionContentProps {
  title: string;
  items: any[];
  renderItem: (item: any) => JSX.Element;
}
