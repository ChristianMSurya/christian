import Image from 'next/image';
import Footer from '@/components/footer';
import ScreenshotLink from '@/components/screenshot-link';

const profiles = {
  dasha: { name: 'dasha', url: 'https://www.linkedin.com/in/dasha-kudriavtseva/' },
  george: { name: 'george', url: 'https://www.linkedin.com/in/george-xue/' },
  ryan: { name: 'ryan wei', url: 'https://www.linkedin.com/in/ryanswei/' },
  ivan: { name: 'ivan', url: 'https://www.linkedin.com/in/ivanzhangku/' },
  lauren: { name: 'lauren', url: 'https://www.linkedin.com/in/lauren-sinsioco/' },
  tanya: { name: 'tanya', url: 'https://www.linkedin.com/in/tanyapattani/' },
  william: { name: 'william', url: 'https://www.linkedin.com/in/william-kim-6b1b851b9/' },
  ronak: { name: 'ronak', url: 'https://www.linkedin.com/in/ronakshah01/' },
  max: { name: 'max', url: 'https://www.linkedin.com/in/maxkan/' },
  joey: { name: 'joey jin', url: 'https://www.linkedin.com/in/joeyjin/' },
};

const messages = [
  { image: 'joey-jin', profiles: [profiles.joey, profiles.max], width: 634, height: 166, text: 'joey jin: christina' },
  { image: '02', profiles: [profiles.william], width: 630, height: 208, text: 'robert do you want to hang out tomorrow with me and christina' },
  { image: 'ronak-shah', profiles: [profiles.ronak], width: 628, height: 144, text: 'ronak shah: oh christina' },
  { image: 'tanya-2020', profiles: [profiles.tanya], width: 628, height: 140, text: 'no you don’t know christina' },
  { image: '04', profiles: [profiles.tanya], width: 636, height: 204, text: 'ariana ur saying yolo christina ur saying be careful' },
  { image: '05', profiles: [profiles.tanya], width: 634, height: 144, text: 'my gosh christina' },
  { image: '06', profiles: [profiles.george, profiles.ryan, profiles.ivan], width: 634, height: 162, text: 'christina, my lips are dry' },
  { image: '07', profiles: [profiles.lauren], width: 836, height: 194, text: 'thanks christina, excited to move forward with you all. oh gosh... christian' },
  { image: '08', profiles: [profiles.dasha], width: 636, height: 140, text: 'christina man' },
  { image: '09', profiles: [profiles.george], width: 634, height: 138, text: 'that’s the point christina' },
  { image: '10', profiles: [profiles.dasha], width: 628, height: 170, text: 'omg pls stop christina' },
  { image: '11', profiles: [profiles.dasha], width: 636, height: 166, text: 'you and christina included man' },
  { image: 'narinder-2025', width: 624, height: 158, text: 'christina can you call me asap' },
];

export default function Christina() {
  return (
    <div className="name-page animate-fade-in">
      <header className="thoughts-header"><h1 className="w-fit cursor-not-allowed">not christina</h1></header>
      <div className="name-screenshots">
        {messages.map((message) => (
          <ScreenshotLink key={message.image} profiles={message.profiles}>
            <Image
              src={`/images/christina/${message.image}.png`}
              width={message.width}
              height={message.height}
              alt={message.text}
              sizes="(max-width: 333px) calc(100vw - 64px), 269px"
            />
          </ScreenshotLink>
        ))}
      </div>
      <div className="mt-20 mb-24"><Footer /></div>
    </div>
  );
}
