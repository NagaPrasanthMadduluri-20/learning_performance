

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n-config'
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: defaultLocale,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*', '/((?!api|_next|.*\\..*).*)']
};