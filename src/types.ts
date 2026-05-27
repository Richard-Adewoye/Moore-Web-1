export interface MetricItem {
  id: string;
  value: string;
  label: string;
}

export interface MethodologyItem {
  id: string;
  stepNo: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  bullets: string[];
  desc?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
}
