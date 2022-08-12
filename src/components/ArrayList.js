import React from "react";

const contactinfo = [
  { name: "Juan", phone: "099999999" },
  { name: "Sam", phone: "097126536" },
  { name: "Diego", phone: "091237788" },
];

const contacts = contactinfo.map((contact, index) => {
  return (
    <li key={index}>
      {contact.name}: {contact.phone}
    </li>
  );
});

class ArrayList extends React.Component {
  render() {
    return <ul>{contacts}</ul>;
  }
}

export default ArrayList;
