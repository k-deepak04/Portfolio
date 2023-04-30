import React from 'react';
import { BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs';

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
  </div>
);

export default SocialMedia;