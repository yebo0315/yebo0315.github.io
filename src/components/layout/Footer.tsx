'use client';

import Image from 'next/image';
import { useLocaleStore } from '@/lib/stores/localeStore';
import { useMessages } from '@/lib/i18n/useMessages';

const visitorCounter = {
  detailsUrl: 'https://info.flagcounter.com/0VSL',
  imageUrl: 'https://s01.flagcounter.com/count/0VSL/bg_FFFFFF/txt_1F2937/border_D1D5DB/columns_2/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_0/',
};

interface FooterProps {
  lastUpdated?: string;
  lastUpdatedByLocale?: Record<string, string | undefined>;
  defaultLocale?: string;
}

export default function Footer({ lastUpdated, lastUpdatedByLocale, defaultLocale = 'en' }: FooterProps) {
  const locale = useLocaleStore((state) => state.locale);
  const messages = useMessages();

  const resolvedLastUpdated =
    lastUpdatedByLocale?.[locale] ||
    (defaultLocale ? lastUpdatedByLocale?.[defaultLocale] : undefined) ||
    lastUpdated ||
    new Date().toLocaleDateString(locale || 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
          <p className="text-center text-xs text-neutral-500 sm:text-left">
            {messages.footer.lastUpdated}: {resolvedLastUpdated}
          </p>
          <a
            href={visitorCounter.detailsUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mx-auto block overflow-hidden rounded border border-neutral-300 bg-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-neutral-700"
            aria-label="View visitor statistics by country"
            title="View visitor statistics by country"
          >
            <Image
              src={visitorCounter.imageUrl}
              alt="Visitor totals and countries"
              width={186}
              height={76}
              className="block h-[76px] w-[186px]"
              loading="eager"
              unoptimized
            />
          </a>
          <p className="flex items-center justify-center text-xs text-neutral-500 sm:justify-end">
            <a href="https://github.com/xyjoey/PRISM" target="_blank" rel="noopener noreferrer">
              {messages.footer.builtWithPrism}
            </a>
            <span className="ml-2">🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
