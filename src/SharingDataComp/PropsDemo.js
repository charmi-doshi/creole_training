import React from "react";

const LinkComponent = (props) => {
  return (
    <>
      <ul>
        <li>
          <a key={props.name} href={props.link} target="_blank">
            {props.name}
          </a>
        </li>
      </ul>
    </>
  );
};
class PropsDemo extends React.Component {
  render() {
    return (
      <>
        <h1>List of Websites</h1>
        {/* child component */}

        <LinkComponent link="https://www.google.com" name="google" />
        <LinkComponent link="https://www.facebook.com" name="facebook" />
      </>
    );
  }
}

export default PropsDemo;
