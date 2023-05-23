import React from 'react';
import { BsLinkedin, BsInstagram,BsGithub,BsMedium,BsTwitter} from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/k-deepak04' target="_blank" rel="noreferrer"><BsLinkedin/></a>
    </div>
    <div>
    <a href='https://github.com/k-deepak04' target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
    <div>
     <a href='https://www.instagram.com/deep_singh_625/'> <BsInstagram /></a>
    </div>
    <div>
     <a href='https://twitter.com/k_deepak04'> <BsTwitter /></a>
    </div>
    <div>
     <a href='https://medium.com/@deepkushwah824'> <BsMedium /></a>
    </div>
  </div>
);

export default SocialMedia;