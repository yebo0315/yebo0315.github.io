'use client';

import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineItem {
  logo: string;
  organization: string;
  role: string;
  location: string;
  date?: string;
  detail?: string;
}

const education: TimelineItem[] = [
  {
    logo: '/logos/um.png',
    organization: 'University of Macau',
    role: 'PhD Student',
    location: 'Macao, China',
    date: 'Sep 2023 - May 2027',
    detail: 'SKL-IOTSC',
  },
  {
    logo: '/logos/ntu.png',
    organization: 'Nanyang Technological University',
    role: 'Visiting Scholar',
    location: 'Singapore',
    date: 'May 2026 - Aug 2026',
    detail: 'College of Computing and Data Science',
  },
  {
    logo: '/logos/tongji.png',
    organization: 'Tongji University',
    role: 'PhD Student',
    location: 'Shanghai, China',
    date: 'Sep 2022 - Jun 2023',
    detail: 'College of Electronics and Information Engineering',
  },
  {
    logo: '/logos/neu.png',
    organization: 'Northeastern University',
    role: 'B.Eng.',
    location: 'Shenyang, China',
    date: 'Sep 2018 - Jun 2022',
    detail: 'Computer Science and Engineering',
  },
];

const internships: TimelineItem[] = [
  {
    logo: '/logos/ant.webp',
    organization: 'Ant Group',
    role: 'Ant Star Talent Program (Plan-A)',
    location: 'Hangzhou, China',
    detail: 'Security',
  },
  {
    logo: '/logos/oppo.png',
    organization: 'OPPO Research Institute',
    role: 'Research Intern',
    location: 'Shenzhen, China',
    detail: 'Data Intelligence Department',
  },
];

function TimelineGroup({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof GraduationCap;
  items: TimelineItem[];
}) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-primary">
        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
        {title}
      </h3>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {items.map((item) => (
          <div
            key={`${item.organization}-${item.role}`}
            className="grid gap-3 py-4 sm:grid-cols-[5.5rem_minmax(0,1.35fr)_minmax(0,1fr)] sm:items-center"
          >
            <div className="flex h-12 w-20 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-1.5 dark:border-neutral-700">
              <Image
                src={item.logo}
                alt={`${item.organization} logo`}
                width={128}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-primary">{item.organization}</p>
              {item.detail && <p className="mt-0.5 text-sm text-neutral-500">{item.detail}</p>}
            </div>
            <div className="min-w-0 sm:text-right">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.role}</p>
              <p className="mt-0.5 text-xs text-neutral-500">
                {item.location}{item.date ? ` · ${item.date}` : ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="mb-5 text-2xl font-serif font-bold text-primary">Education & Experience</h2>
      <div className="space-y-8">
        <TimelineGroup title="Education" icon={GraduationCap} items={education} />
        <TimelineGroup title="Internships" icon={BriefcaseBusiness} items={internships} />
      </div>
    </motion.section>
  );
}
