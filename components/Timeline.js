const Timeline = (props) => {
  return (
    <div className="timeline">
      <div className="experience">
        <p className="year">2020-2021</p>
        <h3>Melko Media, Co-founder</h3>
        <p>
          I personally produced, managed and overlooked over 10 website
          projects. We’re wrapping up the business by the end of 2021.
          <br />
          <br />
          Duration: 2 years
        </p>
      </div>
      <div className="experience">
        <p className="year">2016-2020</p>
        <h3>Taromedia, Founder</h3>
        <p>
          Working with various clients, mainly producing WordPress websites as a
          sole proprietor.
          <br />
          <br />
          Duration: 4 years
        </p>
      </div>
      <div className="experience">
        <p className="year">2019</p>
        <h3>Moka Company, Co-founder</h3>
        <p>
          E-commerce clothing brand. I was responsible for all technical
          implementations (website/digital marketing/analytics). The initiative
          was successful, however we decided to pursue Melko Media instead.
        </p>
        <p>
          <a
            target="_blank"
            href="https://wordpress-384045-1641533.cloudwaysapps.com/"
            rel="noreferrer"
            style={{ fontWeight: "500" }}
          >
            Link to deprecated website.
          </a>
          <br />
          <br />
          Duration: 2 months
        </p>
      </div>
      <div className="experience">
        <p className="year">2018</p>
        <h3>Kwork Oy – Digital marketing specialist.</h3>
        <p>
          Conversion optimization, copywriting, designing and producing
          WordPress websites for different business initiatives.
          <br />
          <br />
          Duration: 3 months, summer job
        </p>
      </div>
      <div className="experience">
        <p className="year">2017</p>
        <h3>Apetit Oyj, Digital marketing trainee</h3>
        <p>
          Worked with Google Analytics, designing campaigns and copywriting.
          <br />
          <br />
          Duration: 3 months, summer job
        </p>
      </div>
      <div className="experience">
        <p className="year">2015-2016</p>
        <h3>Fissiomedia Oy, Project Manager/WordPress Development</h3>
        <p>
          Selling and producing WordPress websites to clients around Finland.
          Duration: 6 months
        </p>
      </div>
    </div>
  );
};

export default Timeline;
