import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import FrameComponent from 'react-frame-component';

import { ConfigConsumer } from './ConfigContext';
import asset from '../../utils/asset';
let head;

// in production env this the styles could be extracted only once when the app
// is starting and then this styles could be loaded inside each frame.
if (process.env.NODE_ENV === 'production') {
  const loaderIframe = window.parent.document.getElementById(
    'deskpro-messenger-loader'
  );
  if (loaderIframe) {
    const styleLink = loaderIframe.contentDocument.head.querySelector(
      'link[rel="stylesheet"]'
    ).href;
    head = <link rel="stylesheet" href={styleLink} />;
  }
}

const defaultIframeStyle = {
  position: 'fixed',
  right: '14px',
  bottom: '14px',
  width: '50px',
  height: '50px'
};

const iFrameContainer =
  document.getElementById('deskpro-container') ||
  window.parent.document.getElementById('deskpro-container') ||
  // this is needed for storybooks.
  document.getElementById('root');

class Frame extends PureComponent {
  constructor(...args) {
    super(...args);

    // in development mode styles are injected on the fly with HMR, so we need to
    // extract them on component rendering.
    if (process.env.NODE_ENV === 'development') {
      // pull css from all style tags because we might not know which one is
      // generated and inserted by webpack HMR.
      const style = Array.from(document.head.querySelectorAll('style'))
        .map((el) => el.innerText)
        .join('\\n');
      head = <style type="text/css">{style}</style>;
    }

    this.el = window.parent.document.createElement('span');

    // TODO: replace with right styles inclusion.
    head = <link rel="stylesheet" href={asset(`styles.css`)} />;
  }

  componentDidMount() {
    iFrameContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    iFrameContainer.removeChild(this.el);
  }

  render() {
    const { children, style = {}, themeVars, ...props } = this.props;

    const htmlStyles = Object.entries(themeVars)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ');
    const initialContent = `
      <!DOCTYPE html><html style="${htmlStyles}">
        <head>
          <!--[if IE]>
          <script src="https://unpkg.com/css-vars-ponyfill@1"></script>
          <script>
            cssVars();
          </script>
          <![endif]-->
        </head>
        <body><div class="frame-root"></div></body>
      </html>
    `;

    return ReactDOM.createPortal(
      <FrameComponent
        head={head}
        frameBorder="0"
        scrolling="no"
        style={{ ...defaultIframeStyle, ...style }}
        {...props}
        initialContent={initialContent}
        ref={this.frame}
      >
        {children}
      </FrameComponent>,
      this.el
    );
  }
}

export default (props) => (
  <ConfigConsumer>
    {({ themeVars }) => <Frame themeVars={themeVars} {...props} />}
  </ConfigConsumer>
);
