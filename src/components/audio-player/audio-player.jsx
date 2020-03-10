import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  // constructor(props) {
  //   super(props);

  //   this._audioRef = createRef();

  //   this.state = {
  //     progress: 0,
  //     isLoading: true,
  //     isPlaying: props.isPlaying,
  //   };
  // }

  // componentDidMount() {
  //   if (!this._audioRef.current) {
  //     return;
  //   }

  //   const {src} = this.props;
  //   const audio = this._audioRef.current;

  //   audio.src = src;

  //   audio.oncanplaythrough = () => this.setState({
  //     isLoading: false
  //   });

  //   audio.onplay = () => this.setState({
  //     isPlaying: true
  //   });

  //   audio.onpause = () => this.setState({
  //     isPlaying: false
  //   });

  //   audio.ontimeupdate = () => this.setState({
  //     progress: audio.currentTime
  //   });
  // }

  // componentWillUnmount() {
  //   if (!this._audioRef.current) {
  //     return;
  //   }
  //   const audio = this._audioRef.current;

  //   audio.oncanplaythrough = null;
  //   audio.onplay = null;
  //   audio.onpause = null;
  //   audio.ontimeupdate = null;
  //   audio.src = ``;
  // }

  render() {
    const {isLoading, isPlaying, onPlayButtonClick, children} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => onPlayButtonClick()}
        />
        <div className="track__status">
          {children}
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default AudioPlayer;
