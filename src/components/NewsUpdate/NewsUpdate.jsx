import React from 'react';
import './NewsUpdate.css';

const NewsUpdate = () => {
  return (
    <>
      <div className="news-section">
        <div className="news-image">
          <img src="./pg1.png" alt="manifestation journal" />
        </div>
        <div className="news-text">
          <h1 className="news-sub-title">Our Latest Release</h1>
          <hr className="news-divider" />
          <h1 className="news-title">Manifestation Journal</h1>
        </div>
      </div>

      <div className="journal-section">
        <div className="journal-info">
          <div>
            <h1 className="journal-title">
              What is a <span>Manisfestation Journal,</span> and how does it
              work?
            </h1>
            <p className="journal-sub-text">
              A manifestation journal is a powerful tool used in the practice of
              manisfesting desires, goals, and intentions. It's a written record
              where individuals document their aspirations, dreams, and positive
              affirmations in a structured and intentional way.
              <br />
              The concept is based on the law of attraction, which suggests that
              by focusing your thoughts, feelings, and energy on your goals, you
              can bring them into your life
            </p>
          </div>
          <div>
            <img
              src="./journal00.png"
              alt="manifest-journal"
              className="img-show"
            />
          </div>
        </div>

        <div className="journal-use">
          <h1 className="journal-use-title">
            Here's how a <span>Manifestation Journal </span>typically works
          </h1>
          <div className="journal-use-text">
                <ul className="journal-use-list">
                    <li className="journal-item">
                        <span>Set Clear Intentions: </span>
                        Start by defining what you want to manifest. this could be anything from persona; goals like career advancement, improved health, or better relationships, to material things like new home or car.
                    </li>
                    <li className="journal-item">
                        <span>Write Descriptive Statements: </span>
                        In your journal, write down your intentions in the present tense as if they;ve already happened. Be specific and detailed about what you desire. For example, "I am enjoying my thriving career as a successful [profession]" or "I am living in my dream house."
                    </li>
                    <li className="journal-item">
                        <span>Positive Affirmations: </span>
                        Alongside your intentions, include positive affirmations related to your goals. These are short, powerful statements that reinforce your belief in your ability to achieve your desires. For instance, "I am worthy of success" or "Abundance flows into my life effortlessly."
                    </li>
                    <li className="journal-item">
                        <span>Visual Aids: </span>
                        Some people enhance their manifestation journal with visual aids like pictures, images, or vision boards that represent their goals. This visual reinforcements can make intentions feel more real.
                    </li>
                    <li className="journal-item">
                        <span>Consistency: </span>
                        Regularly revisit your manifestation journal, ideally on a daily basis. Reading and visualizing your intentions and affirmations helps reinforce your commitment to your goals.
                    </li>
                    <li className="journal-item">
                        <span>Gratitude: </span>
                        It's common to include a section for expressing gratitude in your journal. Acknowledging the things you're thankful for can help creae a positive mindset and attract more positivity into your life.
                    </li>
                    <li className="journal-item">
                        <span>Stay Positive: </span>
                        Maintain a positive and optimistic mindset throughout the process. Believe that your intentions will manifest and act as if they already have. 
                    </li>
                    <li className="journal-item">
                        <span>Track Progress: </span>
                        As you work toward your goals, you can use your manifestttion journal to  track your progress, celebrate achievements, and adjust your intentions if necessary.
                    </li>
                </ul>
                <img src="./journal01.jpg" alt="Manifestation Journal" className="journal-use-img" />
            </div>
        </div>
      </div>
    </>
  );
}

export default NewsUpdate