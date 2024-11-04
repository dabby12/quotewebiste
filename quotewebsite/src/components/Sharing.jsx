// src/components/Sharing.jsx
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  XIcon,
  LinkedinIcon
} from 'react-share';

const Sharing = ({ quote }) => {
  const shareUrl = window.location.href; // Can also use a custom URL
  const shareText = `"${quote.text}" - ${quote.author}`;

  return (
    <div className="flex justify-center space-x-10 mt-4 hover:outline-dashed outline-third ">
      {/* Facebook Share */}
      <FacebookShareButton className="hover:outline-dotted outline-green-500" url={shareUrl} quote={shareText}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* Twitter Share */}
      <XShareButton className='hover:outline-dashed outline-blue-400' url={shareUrl} title={shareText}>
        <XIcon size={32} round />
      </XShareButton>

      {/* WhatsApp Share */}
      <WhatsappShareButton className="hover:outline-double outline-cyan-100 cursor-not-allowed" url={shareUrl} title={shareText} separator=" - ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      {/*idk already */}
     
    </div>

  );
};

export default Sharing;
