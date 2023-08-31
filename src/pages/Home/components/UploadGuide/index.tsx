import { Wrapper } from './style';
import IconHeart from '@/assets/images/icon-heart-circle.svg';
import IconBad from '@/assets/images/icon-bad.svg';
import Good1 from '@/assets/images/good1.svg';
import Good2 from '@/assets/images/good2.svg';
import Good3 from '@/assets/images/good3.svg';
import Good4 from '@/assets/images/good4.svg';
import Bad1 from '@/assets/images/bad1.svg';
import Bad2 from '@/assets/images/bad2.svg';
import Bad3 from '@/assets/images/bad3.svg';
import Bad4 from '@/assets/images/bad4.svg';

export default function UploadGuide() {
  return (
    <Wrapper>
      <div className="title">Photo uploading guide</div>
      <div className="section">
        <div className="section-title">
          <img src={IconHeart} alt="" />
          Good photos
        </div>
        <div className="section-description">
          Use a variety of facial expressions. Selfies or close-up portraits
          only. Try a mix of lighting ang angles in yours shorts.
        </div>
        <div className="section-images">
          {[Good1, Good2, Good3, Good4].map((item: any, index: number) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="section last-section">
        <div className="section-title">
          <img src={IconBad} alt="" />
          Bad photos
        </div>
        <div className="section-description">
          Group shots, full-length, kids, covered faces, animals, monotonous
          pics, nudes.
        </div>
        <div className="section-images">
          {[Bad1, Bad2, Bad3, Bad4].map((item: any, index: number) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
