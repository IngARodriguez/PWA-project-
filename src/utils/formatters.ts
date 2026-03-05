import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (dateString: string, pattern = 'dd/MM/yyyy'): string => {
  return format(parseISO(dateString), pattern, { locale: es });
};

export const formatDateTime = (dateString: string): string => {
  return format(parseISO(dateString), "dd/MM/yyyy 'a las' HH:mm", { locale: es });
};

export const formatRelativeTime = (dateString: string): string => {
  return formatDistanceToNow(parseISO(dateString), { addSuffix: true, locale: es });
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('es', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};
