import Image from 'next/image';
import Footer from '@/components/footer';

const messages = [
  { image: 'joey-jin', width: 634, height: 166, text: 'joey jin: christina' },
  { image: '02', width: 630, height: 208, text: 'robert do you want to hang out tomorrow with me and christina' },
  { image: 'ronak-shah', width: 628, height: 144, text: 'ronak shah: oh christina' },
  { image: 'tanya-2020', width: 628, height: 140, text: 'no you don’t know christina' },
  { image: '04', width: 636, height: 204, text: 'ariana ur saying yolo christina ur saying be careful' },
  { image: '05', width: 634, height: 144, text: 'my gosh christina' },
  { image: '06', width: 634, height: 162, text: 'christina, my lips are dry' },
  { image: '07', width: 836, height: 194, text: 'thanks christina, excited to move forward with you all. oh gosh... christian' },
  { image: '08', width: 636, height: 140, text: 'christina man' },
  { image: '09', width: 634, height: 138, text: 'that’s the point christina' },
  { image: '10', width: 628, height: 170, text: 'omg pls stop christina' },
  { image: '11', width: 636, height: 166, text: 'you and christina included man' },
  { image: 'narinder-2025', width: 624, height: 158, text: 'christina can you call me asap' },
];

export default function Christina() {
  return (
    <div className="name-page animate-fade-in">
      <header className="thoughts-header"><h1 className="w-fit cursor-not-allowed">not christina</h1></header>
      <div className="name-screenshots">
        {messages.map((message) => (
          <Image
            key={message.image}
            src={`/images/christina/${message.image}.png`}
            width={message.width}
            height={message.height}
            alt={message.text}
            sizes="(max-width: 333px) calc(100vw - 64px), 269px"
          />
        ))}
      </div>
      <div className="mt-20 mb-24"><Footer /></div>
    </div>
  );
}
