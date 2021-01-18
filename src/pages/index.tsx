import * as React from "react";
import FactIcon from "../components/FactIcon";
import IconAttribution from "../components/IconAttribution";
import MicIcon from "../components/MicIcon";
import MuteIcon from "../components/MuteIcon";
import StarIcon from "../components/StarIcon";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Fix Facebook</title>
      <h1>Fix Facebook</h1>
      <p>
        Fix Facebook is all about fixing the way we communicate through
        Facebook. What started as a place to celebrate friendships has, for
        many, become a battle ground. We have many challenges ahead and we'll
        need unity to overcome them. Fix Facebook is a first step in fostering
        that unity.
      </p>
      <p>Be part of the solution with three simple steps:</p>
      <h2>1. Mark your Facebook posts as "[Sharing]" or "[Discussing]"</h2>
      <p>
        This communicates to your friend’s how you would like them to
        participate in your post. If you want them to share different
        perspectives put “[Discussing]” on the first line of your post. If you
        are looking for support from your friends and are not in a mood to be
        challenged, then put “[Sharing]” on the first line of your post. It
        might feel awkward or needy to request affirmation from your friends but
        it’s a critical tool for creating good debates when friends are ready
        for “Discussion”.
      </p>
      <p></p>
      <h2>2. Reply to posts marked "[Sharing]" with affirmations</h2>
      <p>
        Facebook was designed for affirmation; all the like buttons are
        affirmations. There are no “don’t like” buttons. When a friend marks a
        post as “[Sharing]”, respect the original purpose of Facebook and affirm
        them. If you disagree with what is being said you have a few options:
      </p>
      <ul>
        <li>
          <h3>
            <StarIcon />
            Affirm them anyway, this is so important
          </h3>
          Take the time to thoughtfully read their post, find something that you
          can agree with, and reply in agreement.
        </li>
        <li>
          <h3>
            <MuteIcon />
            Say nothing and read other's affirmations
          </h3>
          If you can’t understand how any sane person could feel this way, then
          don’t say anything. Instead read the affirmations from other friends.
          This may help widen your perspective and make you more effective at
          arguing your position when you enter a “Discussion”.
        </li>
        <li>
          <h3>
            <MicIcon /> Create your own post
          </h3>
          Take the ideas your friend inspired in you and share them on your own
          timeline with your friends. Don’t forget to mark your post as
          “[Sharing]” or “[Discussing]” so friends understand how to interact
          with your post.
        </li>
        <li>
          <h3>
            <FactIcon /> Reply with a link to a fact-checker
          </h3>
          <p>
            The goal is not to embarrass your friend so be discrete and let the
            fact-checker do the talking. Your friend may choose to disregard the
            fact-checker and you should respect their decision. You’ve done your
            part to discourage misinformation.
          </p>
        </li>
      </ul>
      <h2>3. Share more than you discuss</h2>
      <p>
        We are not suffering from a lack in diversity of opinions;
        we’re suffering from an inability to listen and relate to opposing
        opinions. By sharing, you challenge your friends to thoughtfully
        consider your opinion and find ways to relate to you even if they
        disagree. When you’re ready to open a “discussion” you and your friends
        will have developed understanding and communication skills that will
        result in respectful and useful debates.
      </p>
      <p
        style={{
          fontSize: "10px",
          textAlign: "center",
          width: "100%",
          color: "gray",
        }}
      >
        All product names, logos, and brands are property of their respective
        owners. All company, product and service names used in this website are
        for identification purposes only. Use of these names, logos, and brands
        does not imply endorsement. Facebook is a trademark of Facebook, Inc.
      </p>
      <p>
        {/* Star */}
        <IconAttribution url="http://www.freepik.com" artist="Freepik" />
        {/* Mute */}
        <IconAttribution
          url="https://www.flaticon.com/authors/vectors-market"
          artist="Vectors Market"
        />
        {/* Mic */}
        <IconAttribution url="http://www.freepik.com" artist="Freepik" />
        {/* Fact Check */}
        <IconAttribution url="http://www.freepik.com" artist="Freepik" />
      </p>
    </main>
  );
};

export default IndexPage;
