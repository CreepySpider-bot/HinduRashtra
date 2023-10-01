import React, { Component } from 'react';
import "./Podcast.css"
class PodcastPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playbackRate: 1.0,
      currentTime: '0:00',
      totalTime: '1:00:00',
    };

    this.audioRef = React.createRef();
  }

  componentDidMount() {
    // Get the necessary elements using refs
    this.playButton = document.querySelector('.play');
    this.pauseButton = document.querySelector('.pause');
    this.restartButton = document.querySelector('.restart');
    this.speedControl = document.querySelector('#speed');
    this.speedIndicator = document.querySelector('.speed-indicator');
    this.timeline = document.querySelector('.timeline');
    this.subtitle = document.querySelector('.subtitle');
    this.audio = this.audioRef.current;
    this.currentTime = document.querySelector('.current-time');
    this.totalTime = document.querySelector('.total-time');

    // Add event listeners
    this.playButton.addEventListener('click', () => {
      this.playAudio();
    });

    this.pauseButton.addEventListener('click', () => {
      this.pauseAudio();
    });

    this.restartButton.addEventListener('click', () => {
      this.restartAudio();
    });

    this.speedControl.addEventListener('input', () => {
      this.changeSpeed();
    });

    this.timeline.addEventListener('click', (event) => {
      this.seek(event);
    });

    this.audio.addEventListener('timeupdate', () => {
      this.updateTime();
    });
  }

  componentWillUnmount() {
    // Remove event listeners to avoid memory leaks
    this.playButton.removeEventListener('click', this.playAudio);
    this.pauseButton.removeEventListener('click', this.pauseAudio);
    this.restartButton.removeEventListener('click', this.restartAudio);
    this.speedControl.removeEventListener('input', this.changeSpeed);
    this.timeline.removeEventListener('click', this.seek);
    this.audio.removeEventListener('timeupdate', this.updateTime);
  }

  playAudio() {
    this.audio.play();
    this.setState({ isPlaying: true });
    this.togglePlaybackButtons();
  }

  pauseAudio() {
    this.audio.pause();
    this.setState({ isPlaying: false });
    this.togglePlaybackButtons();
  }

  restartAudio() {
    this.audio.currentTime = 0;
  }

  changeSpeed() {
    const playbackRate = this.speedControl.value;
    this.audio.playbackRate = playbackRate;
    this.setState({ playbackRate });
    this.speedIndicator.innerText = `${playbackRate}x`;
  }

  seek(event) {
    const percent = event.nativeEvent.offsetX / this.timeline.offsetWidth;
    this.audio.currentTime = this.audio.duration * percent;
  }

  updateTime() {
    const current = this.formatTime(this.audio.currentTime);
    const total = this.formatTime(this.audio.duration);
    this.setState({ currentTime: current, totalTime: total });
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formatted = `${this.padZeroes(minutes)}:${this.padZeroes(seconds)}`;
    return formatted;
  }

  padZeroes(num) {
    return num.toString().padStart(2, '0');
  }

  togglePlaybackButtons() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.playButton.style.display = 'none';
      this.pauseButton.style.display = 'block';
    } else {
      this.playButton.style.display = 'block';
      this.pauseButton.style.display = 'none';
    }
  }

  render() {
    return (
      <section id="podcasts">
        <h2>Podcasts</h2>
        <div className="row">
          <div className="podcast-block">
            <div className="media">
              <img
                src="https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg?w=2000"
                alt="Podcast cover image"
              />
            </div>
            <div className="controls">
              <div className="player-info">
                <div className="player-name">
                  <h3>Podcast Title</h3>
                  <p>Episode #123 - Episode Title</p>
                </div>
                <div className="player-time">
                  <span className="current-time">{this.state.currentTime}</span>
                  <span>/</span>
                  <span className="total-time">{this.state.totalTime}</span>
                </div>
              </div>
              <div className="timeline"></div>
              <div className="playback-buttons">
                <button className="play"></button>
                <button className="pause"></button>
                <button className="restart"></button>
              </div>
              <div className="speed-control">
                <label htmlFor="speed">Speed:</label>
                <input
                  type="range"
                  id="speed"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={this.state.playbackRate}
                />
                <span className="speed-indicator">{this.state.playbackRate}x</span>
              </div>
              <div className="platform-logo">
                <a href="https://open.spotify.com/show/12345" target="_blank">
                  <img src="/Users/madhavgarg/Downloads/spotify-icon-png-15380.png" alt="Spotify Logo" />
                </a>
              </div>
              <audio id="podcast-audio" src="/Users/madhavgarg/Downloads/Lets_Celebrate.mp3" ref={this.audioRef}></audio>
              <audio src="podcast_audio.mp3"></audio>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PodcastPlayer;
