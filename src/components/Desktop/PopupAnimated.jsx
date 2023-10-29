import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

export default function AnimatedPopup() {
    const [anchor, setAnchor] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    const handleMouseEnter = () => {
      setOpen(true);
    };
  
    const handleMouseLeave = () => {
      setOpen(false);
    };

  return (
    <div>
      <a
  ref={setAnchor}
  onClick={() => setOpen((o) => !o)}
  type="button"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  style={{ cursor: 'pointer' }}
>
  <div className="header-btn">
    <div className="participate-in">LAUNCH APP</div>
  </div>
</a>

      <BasePopup anchor={anchor} open={open} withTransition>
        {(props) => (
          <>
            <PopupBody>Coming Soon</PopupBody>
          </>
        )}
      </BasePopup>
    </div>
  );
}

function Animated(props) {
  const { requestOpen, onEnter, onExited, children, className } = props;

  React.useEffect(() => {
    if (requestOpen) {
      onEnter();
    }
  }, [onEnter, requestOpen]);

  const handleAnimationEnd = React.useCallback(() => {
    if (!requestOpen) {
      onExited();
    }
  }, [onExited, requestOpen]);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={className + (requestOpen ? ' open' : ' close')}
    >
      {children}
    </div>
  );
}

Animated.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onEnter: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
  requestOpen: PropTypes.bool.isRequired,
};


const grey = {
  50: '#f6f8fa',
  200: '#d0d7de',
  500: '#6e7781',
  700: '#424a53',
  900: '#24292f',
};

const PopupBody = styled('div')(
  ({ theme }) => `
    width: max-content;
    padding: 0.5rem 1rem;
    margin: 8px;
   color:#fff;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#000'};
    border-radius: 8px;
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    min-height: 3rem;
    display: flex;
    align-items: center;
`,
);


