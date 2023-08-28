export interface PageConfig {
  currentPage?: number | 1;
  pageSize?: number | 10;
}

export type BreadcrumbItem = {
  link?: string;
  content: string;
};
