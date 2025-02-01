import React, { useEffect, useState } from 'react';

const headings = ['Full Stack Developer', 'Web Designer', 'Software Engineer'];

const Title = () => {
  const [currentHeading, setCurrentHeading] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentFullHeading = headings[currentIndex];
      setCurrentHeading(prev =>
        isDeleting
          ? currentFullHeading.substring(0, prev.length - 1)
          : currentFullHeading.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentHeading === currentFullHeading) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentHeading === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % headings.length);
      }

      setSpeed(isDeleting ? 30 : 150);
    };

    const typingTimer = setTimeout(handleType, speed);

    return () => clearTimeout(typingTimer);
  }, [currentHeading, isDeleting, currentIndex, speed]);

  return (
    <div>
      <h3 className="text-white lg:text-3xl text-xl uppercase">
        {currentHeading}
        <span className="blinking-cursor lg:text-5xl text-3xl">|</span>
      </h3>
    </div>
  );
};

export default Title;
