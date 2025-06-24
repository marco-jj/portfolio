import React from 'react';
import {Icon} from "astro-icon/components";

const DownloadCVButton = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/opt/static-resources/amedura-cv.pdf';
    link.download = 'amedura-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <button
          onClick={downloadCV}
          id="download-cv"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
          aria-label="Download Cv">
        <Icon
            name="mdi:download"
            class="w-5 h-5"
        />
        <span>Download CV</span>
      </button>
)
  ;
};

export default DownloadCVButton;