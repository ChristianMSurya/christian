/** Keep every “an” bright while the surrounding copy inherits its gray tone. */
export default function AnText({ children }: { children: string }) {
  return children.split(/(an)/gi).map((part, index) =>
    /^an$/i.test(part) ? <span className="an-highlight" key={index}>{part}</span> : part
  );
}
