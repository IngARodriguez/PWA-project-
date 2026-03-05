export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface SelectOption {
  label: string;
  value: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
