import * as React from "react";

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
        that unity. Come be part of the solution!
      </p>
      <p>More details coming soon.</p>
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
    </main>
  );
};

export default IndexPage;
