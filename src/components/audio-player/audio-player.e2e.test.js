import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mockData = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`При нажатии на кнопку воспроизведения кнопка меняется на паузу`, () => {
  const {song} = mockData;
  const onPlayButtonClickHandler = jest.fn();

  const player = shallow(
      <AudioPlayer
        src={song.src}
        isPlaying={true}
        onPlayButtonClick={()=>{}}
      />
  );

  const button = player.find(`.track__button`);
  button.simulate(`click`, onPlayButtonClickHandler({target: false}));

  expect(onPlayButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(onPlayButtonClickHandler.mock.calls[0][0].target).toBe(false);
});
