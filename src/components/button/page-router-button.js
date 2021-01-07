import React from 'react';
import { OnClickRouter } from '../../utils/navigation/button-on-click-router';
import './button.css';

const PageRouterButton = ({
  //   btnData: { className, content, page },
  pageComp,
}) => {
  if (pageComp === 'hackerthons') {
    const url =
      '/learn_more/hackerthons';
    return (
      <button
        onClick={OnClickRouter(url)}
        className={className}
      >
        {content}
      </button>
    );
  } else if (pageComp === 'bootcamps') {
    const url = '/learn_more/bootcamps';

    return (
      <button
        onClick={OnClickRouter(url)}
        className={className}
      >
        {content}
      </button>
    );
  } else if (pageComp === 'bootcamps') {
    const url =
      '/learn_more/school_clubs';

    return (
      <button
        onClick={OnClickRouter(url)}
        className={className}
      >
        {content}
      </button>
    );
  }
};

export default PageRouterButton;
