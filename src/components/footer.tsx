export default function Footer() {
    return (
      <div className="flex gap-8 text-sm">
        <a 
          href="https://linkedin.com/in/christianmatthewnd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          linkedin
        </a>
        <span className="opacity-40 cursor-default">/</span>
        <a 
          href="https://x.com/christianmsurya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          twitter
        </a>
      </div>
    );
  }