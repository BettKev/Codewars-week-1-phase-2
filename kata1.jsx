var React = require("react");

function createElement(content, tag = 'div', properties = {}) {
  return React.createElement(tag, properties, content);
}

function createUnorderedList(list) {
  return React.createElement(
    'ul',
    null,
    list.map((item, index) =>
      React.createElement('li', { key: `item-${index}` }, item)
    )
  );
  }