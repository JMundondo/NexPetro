import * as React from "react";

function SvgLogo(props) {
  return (
    <svg width="5em" height="3em" viewBox="0 0 183 80" {...props}>
      <path
        fill="#6470FB"
        d="M94 4.4c0 3 3 4.3 4.7 2.1 1.6-2.3.5-4.5-2.3-4.5-1.9 0-2.4.5-2.4 2.4zM115.3 3.6c-.3.8.2 2.3 1.1 3.2 1.5 1.5 1.7 1.5 3.2 0 2.1-2.1 1.1-4.8-1.6-4.8-1.1 0-2.3.7-2.7 1.6zM106.2 4.2c-.7.7-1.2 2.4-1.2 3.9s-.7 2.9-1.5 3.3c-.8.3-1.5 1.2-1.5 2.1 0 .8.7 1.5 1.5 1.5 1.2 0 1.5 1.9 1.5 11 0 10.3.1 11 2 11s2-.7 2-11 .1-11 2-11c1.2 0 2-.7 2-1.6 0-.9-.9-1.8-2-2.1-1.1-.3-2-1.2-2-2s.9-1.7 2-2c1.1-.3 2-1.4 2-2.4 0-1.4-.7-1.9-2.8-1.9-1.5 0-3.3.5-4 1.2zM42 20.9V37h2.4c2.2 0 2.5-.5 2.8-4.7.3-4.3.5-4.7 3.5-5.5 4.1-1.1 6.3-5.1 6.3-11.2 0-6.5-3-9.7-9.8-10.4L42 4.7v16.2zm8.8-10.7c1.5 1.5 1.6 9.2.2 11.9-.6 1-1.7 1.9-2.5 1.9-1.2 0-1.5-1.6-1.5-7.5 0-7.6.9-9.2 3.8-6.3zM61.8 12.7c-2.4 2.8-2.8 4-2.2 5.7.9 2.4 3.1 1.9 3.8-.9.4-1.6 1.3-2.5 2.6-2.5 1.6 0 2 .7 2 3.4 0 2.8-.5 3.6-3 4.6-3.8 1.6-6 4.6-6 8.2 0 3.5 3.5 7.2 5.8 6.2.9-.4 3.2-.7 5-.6l3.2.2V26c0-9.7-.2-11.2-2-13-2.5-2.5-7.2-2.6-9.2-.3zm5.4 20.5c-1.6 1.6-3.2-.1-3.2-3.2 0-1.7.7-3.3 1.8-3.9 1.5-.8 1.7-.5 2 2.6.2 2-.1 4-.6 4.5zM79.9 12.9c-1.9 1.6-2.4 3-2.7 8.9-.7 12.2 3.1 18.1 9.6 15 3.4-1.7 4.4-6.8 1.4-6.8-1.2 0-2.2.9-2.5 2.1-.3 1.2-1.2 1.9-1.9 1.7-.9-.3-1.3-2.9-1.3-9.4 0-7.5.3-8.9 1.7-9.2 1.1-.2 1.8.5 2 2 .2 1.2 1.1 2.4 2.1 2.6 1.3.3 1.7-.3 1.7-2.7 0-5.7-5.5-8-10.1-4.2zM94.7 11.7c-.4.3-.7 6.2-.7 13V37h5V24c0-11.9-.1-13-1.8-13-1 0-2.2.3-2.5.7zM116 24c0 12.3.1 13 2 13s2-.7 2-13-.1-13-2-13-2 .7-2 13zM127.1 13.6c-1.7 2.2-2.1 4.1-2.1 10.9 0 9.6 1.6 12.7 6.5 12.7 3 0 6.5-3.1 6.5-5.8 0-2.2-3.8-1.6-4.5.6-2.4 7.5-6.1-6.6-3.9-14.8.8-3 3.2-2.8 4 .4.4 1.6 1.2 2.4 2.3 2.2 2.4-.5 2.5-4.4.2-6.7-2.9-2.9-6.5-2.7-9 .5zM113 41.4c0 1.3.6 2.6 1.3 2.9 2.2.7 3.7-.4 3.7-2.9 0-1.9-.5-2.4-2.5-2.4s-2.5.5-2.5 2.4zM55.2 41.2c-.7.7-1.2 2.4-1.2 3.9s-.7 2.9-1.5 3.3c-.8.3-1.5 1.2-1.5 2.1 0 .8.7 1.5 1.5 1.5 1.2 0 1.5 1.9 1.5 11 0 10.3.1 11 2 11s2-.7 2-11 .1-11 2-11c1.3 0 2-.7 2-2s-.7-2-2-2c-1.2 0-2-.7-2-1.6 0-.9.9-1.8 2-2.1 1.1-.3 2-1.4 2-2.4 0-1.4-.7-1.9-2.8-1.9-1.5 0-3.3.5-4 1.2zM177 57v17h5V40h-5v17zM2 58v16h2.5c2.3 0 2.5-.3 2.5-5s.2-5 2.5-5c5.1 0 8.5-6.9 7.1-14.5-.9-4.7-4.7-7.5-10.2-7.5H2v16zm9-10.5c1.6 2 .8 11.4-1.1 12.6C7.3 61.7 7 61 7 53.5c0-5.7.3-7.5 1.4-7.5.7 0 1.9.7 2.6 1.5zM20 61v13h5V63c0-9.1.3-11 1.5-11 .9 0 1.5 1 1.5 2.6 0 1.9.4 2.5 1.8 2.2 1.2-.2 1.7-1.3 1.7-3.7 0-4.2-2.5-6.2-5.5-4.4-1.2.8-2.1.9-2.5.3-.3-.6-1.3-1-2.1-1-1.1 0-1.4 2.3-1.4 13zM37.1 49.9c-3.7 3.7-3.9 18.4-.4 22.3 2.4 2.6 7.9 2.3 9.7-.5 3.4-5.2 3.2-18.1-.5-21.8-1-1-3-1.9-4.4-1.9-1.4 0-3.4.9-4.4 1.9zm6.7 9.6c.4 8.1-.3 11.5-2.2 11.5-2 0-2.6-2.3-2.6-9.5 0-7.5.7-9.7 2.9-9.3 1.3.3 1.7 1.8 1.9 7.3zM66.1 50.6c-1.7 2.2-2.1 4.1-2.1 10.8C64 71.5 65.4 74 70.9 74c4.1 0 5.5-1.1 6.4-4.8.7-3-2.5-3-4.5 0S69 70.7 69 65.9c0-3.9 0-3.9 3.9-3.9 2.6 0 4.1-.5 4.5-1.6 3.3-8.6-5.9-16.6-11.3-9.8zm6.9 4.9c0 2.8-.4 3.5-2 3.5s-2-.7-2-3.5.4-3.5 2-3.5 2 .7 2 3.5zM83.2 49.6c-3.4 2.3-2.8 6.4 1.8 12.5 2.2 3 4 6.2 4 7.2 0 2.7-3.4 1.7-3.8-1.1-.5-3.5-4.2-3-4.2.6 0 3.8 1.7 5.2 6.2 5.2 2.9 0 4.1-.6 5.4-2.5 2-3 1.3-5-3.7-11.7-4.3-5.8-4.8-7.8-2-7.8 1.2 0 2.1.9 2.5 2.5 1 3.9 3.6 3.2 3.6-1 0-5.2-5.1-7.2-9.8-3.9zM99.2 48.7c-2.1.8-3.3 5-2.2 7.9.6 1.4 2.6 4.6 4.6 7 2.3 2.7 3.4 5 3 6-.8 2-2.8 1.4-4.1-1.4-1.8-4-5.3-1.6-3.8 2.6.9 2.5 2.3 3.2 6.4 3.2 7.2 0 8.1-5.8 1.9-13.5-4.4-5.5-5.1-8.5-2-8.5 1.5 0 2 .7 2 2.6 0 3.3 3.3 2.9 3.8-.4.7-4.5-4.7-7.5-9.6-5.5zM113 61v13h5V48h-5v13zM124.9 49.9c-2 1.6-2.4 3-2.7 9.3-.3 5.1.1 8.5 1.2 11.1 1.4 3.4 1.8 3.7 5.5 3.7 5.8 0 7.1-2.3 7.1-13.2 0-7.5-.3-9.1-2-10.8-2.5-2.5-6.1-2.6-9.1-.1zm6.5 4.3c1.9 7.2-.3 18.2-3.2 16.4-1.3-.8-1.7-16.7-.5-17.9 1.3-1.4 3.1-.6 3.7 1.5zM141 61c0 12.3.1 13 2 13 1.8 0 2-.8 2.2-10.8.3-10.2.4-10.7 2.6-11 2.2-.3 2.2-.2 2.2 10.7V74h5V62.7c0-10.2-.2-11.6-2.1-13.2-1.7-1.7-2.4-1.7-5.2-.7-2.1.8-3.3.9-3.5.2-.2-.5-1-1-1.8-1-1.1 0-1.4 2.5-1.4 13zM161.2 49.6c-1.6 1.1-2.2 2.4-2 4.2.4 3.5 2.6 3.9 3.8.7 1.3-3.4 4.4-3 4.8.6.2 2-.5 3-3.5 5-5 3.2-6.9 7.1-5.3 11 1.2 2.7 1.5 2.9 7.1 2.7l5.9-.2V62.4c0-8.9-.3-11.6-1.6-12.8-2-2.1-6.3-2-9.2 0zm6.6 16.6c-.2 3.5-.7 4.3-2.3 4.3-2.7 0-3.2-4-.9-6.6 2.6-2.9 3.5-2.3 3.2 2.3z"
      />
    </svg>
  );
}

export default SvgLogo;
