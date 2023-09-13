import { Wrapper } from './style';
import IconHeart from '@/assets/images/icon-heart-circle.svg';
import IconBad from '@/assets/images/icon-bad.svg';
import Good1 from '@/assets/images/GoodPC1.svg';
import Good2 from '@/assets/images/GoodPC2.svg';
import Good3 from '@/assets/images/GoodPC3.svg';
import Good4 from '@/assets/images/GoodPC4.svg';
import Bad1 from '@/assets/images/BadPC1.svg';
import Bad2 from '@/assets/images/BadPC2.svg';
import Bad3 from '@/assets/images/BadPC3.svg';
import Bad4 from '@/assets/images/BadPC4.svg';

export default function UploadGuidePC() {
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
