'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../src/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChange = (e) => {
    router.replace(pathname, { locale: e.target.value });
  };
  
  return (
    <select 
      onChange={handleChange}
      value={locale}
      className="bg-transparent border border-primary rounded px-2 py-1 text-primary"
    >
      <option value="ja">日本語</option>
      <option value="en">English</option>
    </select>
  );
}