const Timeline = (props) => {
  return (
    <div className="timeline">
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">2020 – 2021</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">Melko Media</h2>
        <p className="timeline__paragraph">
          My first YouTube video was a tutorial on how to build a client-server
          sockets app in Java.
        </p>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">5,000 Subscribers Q&A</h2>
        <p className="timeline__paragraph">
          To celebrate 5,000 subscribers, I published a video answering some of
          the most popular questions which my viewers had asked me since
          starting my YouTube channel.
        </p>
        <p className="timeline__paragraph">
          I didnst even remove the jumper in the background before recording
          that video 🤣
        </p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date">February 25, 2019</div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">June 3, 2020</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">First Live Stream</h2>
        <p className="timeline__paragraph">
          In my first ever live stream, I couldnt put my cup of coffee down.
        </p>
      </div>
      <div className="timeline__component timeline__component--bottom timeline__component--bg">
        <h2 className="timeline__title">Vertical Timeline</h2>
        <p className="timeline__paragraph">Published this video.</p>
        <p className="timeline__paragraph">Link to code in description 🔽</p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
        <div className="timeline__point timeline__point--bottom"></div>
      </div>
      <div className="timeline__component timeline__component--bottom">
        <div className="timeline__date">June 28, 2021</div>
      </div>
    </div>
  );
};

export default Timeline;
