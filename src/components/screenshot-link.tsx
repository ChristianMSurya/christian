import { type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Profile = { name: string; url: string };

const arrowClassName = 'absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out';
const imageLinkClassName = 'group relative block rounded-lg focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#777]';

export default function ScreenshotLink({ profiles, children }: {
  profiles?: Profile[];
  children: ReactNode;
}) {
  if (!profiles?.length) return children;

  if (profiles.length > 1) {
    return (
      <details>
        <summary
          className={`${imageLinkClassName} list-none cursor-pointer [&::-webkit-details-marker]:hidden`}
          aria-label={`choose a linkedin profile: ${profiles.map((profile) => profile.name).join(', ')}`}
        >
          {children}
          <ArrowUpRight aria-hidden="true" className={arrowClassName} />
        </summary>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {profiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link group relative inline-block align-top focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#777]"
              aria-label={`open ${profile.name} on linkedin (new tab)`}
            >
              {profile.name}
              <ArrowUpRight aria-hidden="true" className={arrowClassName} />
            </a>
          ))}
        </div>
      </details>
    );
  }

  return (
    <a
      href={profiles[0].url}
      target="_blank"
      rel="noopener noreferrer"
      className={imageLinkClassName}
      aria-label={`open ${profiles[0].name} on linkedin (new tab)`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className={arrowClassName} />
    </a>
  );
}
