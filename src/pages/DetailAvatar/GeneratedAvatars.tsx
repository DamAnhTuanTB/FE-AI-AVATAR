import React, { useEffect, useRef, useState } from 'react';
import { AvatarsSlider } from './style';
import { capitalizeWords } from '@/utils/helpers';
import { useNavigate, useParams } from 'react-router-dom';

export default function GeneratedAvatars({
  listAvatar,
  detailAvatar,
}: {
  listAvatar: any[];
  detailAvatar: any;
}) {
  const navigate = useNavigate();
  const params = useParams();
  const ourRef = useRef<any>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const handleDragStart = (e: any) => {
    if (!ourRef.current) return;
    const slider = ourRef.current?.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = 'default';
  };

  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current?.children[0];
    const x = e.pageX - slider.offsetLeft;
    // const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    // const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    // slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  useEffect(() => {
    function handleMoveOutSide(event: any) {
      if (ourRef.current && !ourRef.current.contains(event.target)) {
        handleDragEnd();
      }
    }
    // Bind the event listener
    document.addEventListener('mousemove', handleMoveOutSide);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousemove', handleMoveOutSide);
    };
  }, [ourRef]);

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
    >
      <AvatarsSlider>
        {Object.keys(listAvatar)?.map((style: string, index: number) => (
          <div
            className="item-child"
            key={style}
            onClick={() => navigate(`/my-avatar/${params.id}/${style}`)}
          >
            <div className="item-generated">
              <div className="col-1">
                <img src={detailAvatar?.results[style][0]} alt="" />
              </div>
              <div className="col-2">
                <img src={detailAvatar?.results[style][1]} alt="" />
                <img src={detailAvatar?.results[style][2]} alt="" />
              </div>
            </div>
            <div className="name-style">Style: {capitalizeWords(style)}</div>
            <div className="number-image">10 images</div>
          </div>
        ))}
      </AvatarsSlider>
    </div>
  );
}
