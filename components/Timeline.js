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
        <h2 className="timeline__title">Melko Media, Co-founder</h2>
        <p className="timeline__paragraph">
          I personally produced, managed and overlooked over 10 website
          projects. We’re wrapping up the business by the end of 2021.
          <br />
          Duration: 2 years
        </p>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">Taromedia, Founder</h2>
        <p className="timeline__paragraph">
          Working with various clients mainly producing WordPress websites as a
          sole proprietor.
          <br />
          Duration: 4 years
        </p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date">2016-2020</div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">2019</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">Moka Company, Co-founder</h2>
        <p className="timeline__paragraph">
          E-commerce clothing brand. I was responsible for all technical
          implementations (website/digital marketing/analytics). The initiative
          was successful, however we decided to pursue Melko Media instead.
          <br />
          Duration: 2 months.
        </p>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">
          Kwork Oy – Digital marketing specialist.
        </h2>
        <p className="timeline__paragraph">
          Conversion optimization, copywriting, designing and producing
          WordPress websites for different business initiatives.
          <br />
          Duration: 3 months, summer job.
        </p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bottom">
        <div className="timeline__date">2018</div>
      </div>
      <div className="timeline__component">
        <div className="timeline__date timeline__date--right">2017</div>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">
          Apetit Oyj, Digital marketing trainee
        </h2>
        <p className="timeline__paragraph">
          Worked with Google Analytics, designing campaigns and copywriting.
          <br />
          Duration: 3 months, summer job.
        </p>
      </div>
      <div className="timeline__component timeline__component--bg">
        <h2 className="timeline__title">
          Fissiomedia Oy, Project Manager/WordPress Development
        </h2>
        <p className="timeline__paragraph">
          Selling and producing WordPress websites to clients around Finland.
          <br />
          Duration: 6 months
        </p>
      </div>
      <div className="timeline__middle">
        <div className="timeline__point"></div>
      </div>
      <div className="timeline__component timeline__component--bottom">
        <div className="timeline__date">2015-2016</div>
      </div>
    </div>
  );
};

export default Timeline;
