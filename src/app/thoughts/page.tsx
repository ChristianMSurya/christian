'use client';

import AnText from '@/components/an-text';
import Footer from '@/components/footer';

const thoughts = [
  {
    title: 'the work between the work',
    date: 'july 3, 2026',
    paragraphs: [
      'most of the work is easy to name. ship the feature. fix the bug. write the document. the harder part is everything in between: noticing that two people mean different things when they say the same word, or asking the question everyone has quietly walked around.',
      'i used to think progress meant having something new to show at the end of every day. now i think some days are useful because there is one less thing we are confused about. a smaller problem. a clearer decision. someone who finally knows what to do next.',
      'none of that makes for a particularly exciting update. but it tends to make the next day better.',
    ],
  },
  {
    title: 'a little less product',
    date: 'july 15, 2026',
    paragraphs: [
      'there is a specific kind of satisfaction in removing something from a screen. not hiding it in a menu. actually deciding it does not need to exist.',
      'adding a button is often easier than agreeing on what the product should do. a new setting lets us postpone a decision and hand it to the person using it. sometimes that flexibility is necessary. sometimes we have just given someone homework.',
      'the products i keep coming back to seem to have an opinion. they do a few things well, make the next step obvious, and let me get on with my day. i would like to make more things like that.',
    ],
  },
  {
    title: 'notes before knowing',
    date: 'july 24, 2026',
    paragraphs: [
      'i keep waiting until i have a finished thought before writing anything down. this is a very effective way to write nothing.',
      'the trouble is that a thought usually gets finished by being written. the first sentence reveals the part i do not understand. the second contradicts the first. somewhere around the fifth, there might be something worth keeping.',
      'so this is a place for the version before the polished version. things i am noticing, questions i am still carrying, and ideas i might change my mind about. no grand conclusion required.',
    ],
  },
];

const demoThoughts = [
  ...[...thoughts].reverse(),
  {
    title: 'leaving room',
    date: 'june 26, 2026',
    paragraphs: [
      'an empty afternoon can feel like a scheduling mistake. there is always something else to fit in, someone to reply to, or a small task that promises to become a large one.',
      'but leaving a little room has its uses. a conversation can run long. a walk can take the scenic route. an idea can arrive without having to ask for a spot on the calendar.',
      'i am trying to leave more things slightly unplanned.',
    ],
  },
  {
    title: 'small things, repeated',
    date: 'june 18, 2026',
    paragraphs: [
      'i tend to overestimate what a very motivated saturday can accomplish and underestimate what twenty ordinary minutes can do.',
      'the ordinary version is less interesting to talk about. read a few pages. write a paragraph. ask one better question. there is no big announcement, just a small thing done again.',
      'maybe consistency is mostly making the next attempt easy enough to start.',
    ],
  },
  {
    title: 'paying attention',
    date: 'june 5, 2026',
    paragraphs: [
      'some of my favorite ideas began as a minor annoyance. something took too many steps, a label did not make sense, or i had to explain the same thing twice.',
      'it is tempting to move past those moments. but an annoyance is a useful little signal. someone else has probably felt it too, and they might not have the time or the words to point it out.',
      'i want to get better at noticing before deciding what to build.',
    ],
  },
];

export default function Thoughts() {
  return (
    <div className="thoughts-page animate-fade-in">
      <header className="thoughts-header">
        <h1>thoughts</h1>
      </header>
      <div className="thoughts-list">
        {demoThoughts.map((thought, index) => {
          const number = String(demoThoughts.length - index).padStart(3, '0');
          const title = <AnText>{thought.title}</AnText>;
          return (
            <article className="thought" key={thought.title}>
              <h2>{number} / {title}</h2>
              <span>{thought.date}</span>
              <div className="thought-body">
                {thought.paragraphs.map((paragraph) => <p key={paragraph}><AnText>{paragraph}</AnText></p>)}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-20 mb-24"><Footer /></div>
    </div>
  );
}
