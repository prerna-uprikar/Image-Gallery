import styles from "./Main.module.scss";
const Main = () => {
  return (
    <>
      <div className={`${styles.bg}`}>
        <div className={`${styles.cocahingCenetrCont}`}>
          <p className={`${styles.bgHeading}`}>COACHING CENTER</p>
          <h1 className={`${styles.bgText}`}>
            Teaching and <br /> Learning Center
          </h1>
          <p className={`${styles.bgPara}`}>
            Further your professional development with online and on- <br />{" "}
            site courses, webinars and teaching materials.
          </p>
          <div>
            <button className={`${styles.bgButton}`}>Contact Us</button>
          </div>
        </div>
        <div className={`${styles.imageContainer}`}>
          <img
            className={`${styles.imageMan}`}
            src="https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/a7037178e5eb59418bab6c44/dswamin.png"
          />
        </div>
      </div>
      <div className={`${styles.bg2}`}>
        <div className={`${styles.whatWeDo}`}>
          <h1 className={`${styles.whatWeDoMainHeading}`}>WHAT WE DO</h1>
          <div className={`${styles.whatWeDoSec1}`}>
            <p className={`${styles.whatWeDoHeading}`}>
              New Strategies for Teacher <br /> Learning
            </p>
            <p className={`${styles.whatWeDoHeadingPara}`}>
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea <br /> commodo consequat.
            </p>
          </div>
          <div className={`${styles.whatWeDoSec1}`}>
            <p className={`${styles.whatWeDoHeading}`}>
              Professional Learning in <br /> Practice
            </p>
            <p className={`${styles.whatWeDoHeadingPara}`}>
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea <br /> commodo consequat.
            </p>
          </div>
        </div>
        <div className={`${styles.whatWeDo}`}>
          <h1 className={`${styles.whatWeDoMainHeading}`}>
            PROFESSIONAL LEARNING
          </h1>
          <div className={`${styles.whatWeDoSec2}`}>
            <p className={`${styles.whatWeDoHeading}`}>
              What Teachers Need to Know
            </p>
            <p className={`${styles.whatWeDoHeadingPara}`}>
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea <br /> commodo consequat.
            </p>
          </div>
          <div className={`${styles.whatWeDoSec2}`}>
            <p className={`${styles.whatWeDoHeading}`}> The Good Design</p>
            <p className={`${styles.whatWeDoHeadingPara}`}>
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea <br /> commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.educationSec}`}>
        <h1 className={`${styles.educationHeading}`}>Education and Learning</h1>
        <p className={`${styles.educationPara}`}>
          Learning is something we do almost every day
        </p>
        <div className={`${styles.educationCardContainer}`}>
          <div className={`${styles.educationCard}`}>
            <div className={`${styles.numberContainer}`}>
              <p className={`${styles.educationCardNo}`}>01</p>
            </div>
            <p className={`${styles.educationCardHeading}`}>Teaching</p>
            <p className={`${styles.educationCardText}`}>
              Sample text. Click to select the <br />
              text box. Click again or double <br />
              click to start editing the text.
            </p>
            <a className={`${styles.educationCardButton}`}>LEARN MORE</a>
          </div>
          <div className={`${styles.educationCard}`}>
            <div className={`${styles.numberContainer}`}>
              <p className={`${styles.educationCardNo}`}>02</p>
            </div>{" "}
            <p className={`${styles.educationCardHeading}`}>Innovations</p>
            <p className={`${styles.educationCardText}`}>
              Sample text. Click to select the <br /> text box. Click again or
              double <br />
              click to start editing the text.
            </p>
            <a className={`${styles.educationCardButton}`}>LEARN MORE</a>
          </div>
          <div className={`${styles.educationCard}`}>
            <div className={`${styles.numberContainer}`}>
              <p className={`${styles.educationCardNo}`}>03</p>
            </div>{" "}
            <p className={`${styles.educationCardHeading}`}>Students</p>
            <p className={`${styles.educationCardText}`}>
              Sample text. Click to select the <br /> text box. Click again or
              double <br />
              click to start editing the text.
            </p>
            <a className={`${styles.educationCardButton}`}>LEARN MORE</a>
          </div>
          <div className={`${styles.educationCard}`}>
            <div className={`${styles.numberContainer}`}>
              <p className={`${styles.educationCardNo}`}>04</p>
            </div>{" "}
            <p className={`${styles.educationCardHeading}`}>Resources</p>
            <p className={`${styles.educationCardText}`}>
              Sample text. Click to select the <br /> text box. Click again or
              double <br />
              click to start editing the text.
            </p>
            <a className={`${styles.educationCardButton}`}>LEARN MORE</a>
          </div>
        </div>
      </div>

      <div className={`${styles.myTeamContainer}`}>
        <div className={`${styles.myTeamContaine}`}>
          <p className={`${styles.myTeamContainerHeading}`}>Meet The Team</p>
          <p lassName={`${styles.imageTextPara}`}>
            Image by
            <a className={`${styles.freePick}`}>Freepik</a>
          </p>
        </div>
        <div className={`${styles.myTeamCardCont}`}>
          <div className={`${styles.myTeamCardSec}`}>
            <div className={`${styles.myTeamCard}`}>
              <div className={`${styles.cardImageSec}`}>
                <img
                  className={`${styles.myTeamcardImage}`}
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/39261fbbefa65d409eb3d909/b5f9e7f9-f0cf-42fb-96c9-3156bc7d64a2.jpg"
                />
              </div>
              <div className={`${styles.cardInfoSec}`}>
                <p className={`${styles.position}`}>creative leader</p>
                <h3 className={`${styles.name}`}>Bob Brown</h3>
                <p className={`${styles.data}`}>
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
            <div className={`${styles.myTeamCard}`}>
              <div className={`${styles.cardImageSec}`}>
                <img
                  className={`${styles.myTeamcardImage}`}
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6ae86b907f44543284a736f4/13064dd8-b859-4a0d-8b5b-0944d529a9c2.jpg"
                />
              </div>
              <div className={`${styles.cardInfoSec}`}>
                <p className={`${styles.position}`}>sales manager</p>
                <h3 className={`${styles.name}`}>Mary Smith </h3>
                <p className={`${styles.data}`}>
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.myTeamCardSec}`}>
            <div className={`${styles.myTeamCard}`}>
              <div className={`${styles.cardImageSec}`}>
                <img
                  className={`${styles.myTeamcardImage}`}
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6ae86b907f44543284a736f4/13064dd8-b859-4a0d-8b5b-0944d529a9c2.jpg"
                />
              </div>
              <div className={`${styles.cardInfoSec}`}>
                <p className={`${styles.position}`}>sales manager</p>
                <h3 className={`${styles.name}`}>Mary Smith </h3>
                <p className={`${styles.data}`}>
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>

            <div className={`${styles.myTeamCard}`}>
              <div className={`${styles.cardImageSec}`}>
                <img
                  className={`${styles.myTeamcardImage}`}
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6ae86b907f44543284a736f4/13064dd8-b859-4a0d-8b5b-0944d529a9c2.jpg"
                />
              </div>
              <div className={`${styles.cardInfoSec}`}>
                <p className={`${styles.position}`}>sales manager</p>
                <h3 className={`${styles.name}`}>Mary Smith </h3>
                <p className={`${styles.data}`}>
                  Glavi amet ritnisl libero molestie ante ut fringilla purus
                  eros quis glavrid from dolor amet iquam lorem bibendum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.workingSec}`}>
        <h1 className={`${styles.workingHeading}`}>Start working smarter</h1>
        <p className={`${styles.workingPara}`}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit
        </p>
        <button className={`${styles.workingButton}`}>Discover More</button>
      </div>
      <div className={`${styles.spaceSec}`}>
        <h3 className={`${styles.spaceHeading}`}>
          Your space <br />
          to learn, connect, <br />
          and be inspired
        </h3>
        <p className={`${styles.spacePara}`}>
          Sample text. Click to select the text box. Click again or double click
          to <br /> start editing the text. Viverra maecenas accumsan lacus vel
          facilisis <br /> volutpat. Cras fermentum odio eu feugiat pretium
          nibh.
        </p>
        <p className={`${styles.spacePara}`}>
          Image by
          <a className={`${styles.spacePara}`}>Freepik</a>
        </p>
        <button className={`${styles.spaceButton}`}>Contact Us</button>
      </div>
      <div className={`${styles.educationSec}`}>
        <h1 className={`${styles.educationHeading}`}>Educational programs</h1>
        <p className={`${styles.educationPara}`}>
          Dignissim sodales ut eu sem. Amet luctus venenatis
        </p>
        <div className={`${styles.educationImage}`}></div>
      </div>
      <div className={`${styles.education2CardCont}`}>
        <div className={`${styles.educationCardCont}`}>
          <h1 className={`${styles.education2Heading}`}>AWARDS WON</h1>
          <p className={`${styles.education2Para}`}>17</p>
        </div>
        <div className={`${styles.educationCardCont}`}>
          <h1 className={`${styles.education2Heading}`}>XP YEARS</h1>
          <p className={`${styles.education2Para}`}>12+</p>
        </div>
        <div className={`${styles.educationCardCont}`}>
          <h1 className={`${styles.education2Heading}`}>CLIENTS</h1>
          <p className={`${styles.education2Para}`}>108</p>
        </div>
        <div className={`${styles.educationCardCont}`}>
          <h1 className={`${styles.education2Heading}`}>PROJECTS</h1>
          <p className={`${styles.education2Para}`}>150</p>
        </div>
        <div></div>
      </div>
      <div>
        <p className={`${styles.educationEnd}`}>
          Images from
          <a className={`${styles.spacePara}`}>Freepik</a>
        </p>
      </div>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerCont}`}>
          <h1 className={`${styles.footerHeading}`}>Contact Us</h1>
          <p className={`${styles.footerPara}`}>
            Dignissim sodales ut eu sem. Amet <br /> luctus venenatis lectus
            magna.
          </p>
          <button className={`${styles.footerButton}`}>SUBMIT</button>
        </div>
        <div className={`${styles.footerCont}`}>
          <h1 className={`${styles.footerHeading}`}>Whatsapp Support</h1>
          <p className={`${styles.footerPara}`}>
            Add us on WhatsApp & send queries <br /> for instant reply.{" "}
          </p>
          <button className={`${styles.footerButton}`}>00-9284024094</button>
        </div>
        <div className={`${styles.footerCont}`}>
          <h1 className={`${styles.footerHeading}`}>Live Chat</h1>
          <p className={`${styles.footerPara}`}>
            The fastest way to get in touch with an <br /> Expert
          </p>
          <button className={`${styles.footerButton}`}>LIVE CHART</button>
        </div>
      </div>
      <div className={`${styles.belowFooterButton}`}>
        <p className={`${styles.belowFooterButtonText}`}>Sample text. Click to select the Text Element.</p>
        <div className={`${styles.belowFooterButtonTextSec}`}>
        <p className={`${styles.belowFooterButtonText2}`}> <a className={`${styles.freeTemplate}`}>Free Template</a> created with <a className={`${styles.freeTemplate}`} q>Website Builder Software</a>.</p>

        </div>
      </div>

    </>
  );
};

export default Main;
