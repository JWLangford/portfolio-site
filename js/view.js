import hh from "hyperscript-helpers"
import h from "virtual-dom/h"

const {
  pre,
  div,
  header,
  h1,
  form,
  label,
  input,
  button,
  thead,
  tr,
  ul,
  th,
  td,
  li,
  tbody,
  table,
  span,
  a,
  i,
} = hh(h);

export const loader = () => {
  return div(
    { id: "preload" }[div({ className: "kd-bounce" }[(div(), div())])]
  );
};

export const buildHeaderLinks = (links) => {
  return ul(
    { className: "menu menu-list text-right clearfix" },
    links.map(headerItem)
  );
};

const headerItem = (link) => {
  const { title, href } = link;
  return li({ className: "menu-item" }, [a({ href }, title)]);
};

export const socialItem = ({ title, href, icon }) => {
  return a({ className: "btn", target: "_blank", href, title }, [
    i({ className: `fa fa-${icon}` }),
  ]);
};

export const infoItem = ({ title, value }) => {
  return li([span({ style: "font-weight: bold" }, title), value]);
};
