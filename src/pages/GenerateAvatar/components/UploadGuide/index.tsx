import { Wrapper, WrapperPC } from './style';
import IconHeart from '@/assets/images/icon-heart-circle.svg';
import IconBad from '@/assets/images/icon-bad.svg';
import Good1 from '@/assets/images/g1.png';
import Good2 from '@/assets/images/g2.png';
import Good3 from '@/assets/images/good3.svg';
import Good4 from '@/assets/images/g4.png';
import Bad1 from '@/assets/images/bad1.svg';
import Bad2 from '@/assets/images/bad2.svg';
import Bad3 from '@/assets/images/bad3.svg';
import Bad4 from '@/assets/images/bad4.svg';
import Good1PC from '@/assets/images/gpc1.png';
import Good2PC from '@/assets/images/gpc2.png';
import Good3PC from '@/assets/images/gpc3.png';
import Good4PC from '@/assets/images/gpc4.png';
import Bad1PC from '@/assets/images/b1pc.png';
import Bad2PC from '@/assets/images/b2pc.png';
import Bad3PC from '@/assets/images/b3pc.png';
import Bad4PC from '@/assets/images/b4pc.png';
import useScreenSize from '@/hooks/useScreenSize';

export default function UploadGuide() {
  const { isDesktop } = useScreenSize();
  return isDesktop ? (
    <WrapperPC>
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
          {[Good1PC, Good2PC, Good3PC, Good4PC].map(
            (item: any, index: number) => (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="section last-section">
        <div className="section-title">
          <img src={IconBad} alt="" />
          Bad photos
        </div>
        <div className="section-description">
          Group shots, full body, kids, covered faces, animals, monotonous pics,
          nudes.
        </div>
        <div className="section-images">
          {[Bad1PC, Bad2PC, Bad3PC, Bad4PC].map((item: any, index: number) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </WrapperPC>
  ) : (
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
          Group shots, full body, kids, covered faces, animals, monotonous pics,
          nudes.
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
