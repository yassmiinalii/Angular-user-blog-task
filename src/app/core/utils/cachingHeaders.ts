import { HttpHeaders } from "@angular/common/http";

export function getCachingHeaders(): HttpHeaders {
  return new HttpHeaders()
    .append('Cache-Control', 'public, max-age=31536000, immutable')
    .append('Expires', 'Thu, 31 Dec 2030 23:59:59 GMT')
    .append('ETag', '"static-resource-123"')
    .append('Last-Modified', 'Mon, 01 Jan 2023 00:00:00 GMT');
}
