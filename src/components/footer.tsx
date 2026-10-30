import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="flex gap-[1ch] text-sm">
      <a
        href="https://linkedin.com/in/christianmatthewnd"
        target="_blank"
        rel="noopener noreferrer"
        className="site-link group relative"
      >
        linkedin
        <ArrowUpRight aria-hidden="true" className="absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
      </a>
      <span className="text-[#555555] cursor-default">/</span>
      <a
        href="https://x.com/christianmsurya"
        target="_blank"
        rel="noopener noreferrer"
        className="site-link group relative"
      >
        twitter
        <ArrowUpRight aria-hidden="true" className="absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
      </a>
    </div>
  );
}
