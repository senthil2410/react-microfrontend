export interface Pagination {
  totalPages: number;
  currentPage: number;
  total: number;
}

export interface PaginationProps
  extends Pick<Pagination, "currentPage" | "totalPages"> {
  onPageChange: (page: number) => void;
}

