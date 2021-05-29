import createElement from "virtual-dom/create-element"

import { buildHeaderLinks, infoItem, loader, socialItem } from "./view"

function app(initialState) {
  const { headerLinks, socialLinks, infoLinks } = initialState;

  const headerLinksNode = buildHeaderLinks(headerLinks);

  attach("loader-container", loader());
  attach("header-links", headerLinksNode);
  infoLinks.map((i) => attach("info-list", infoItem(i)));
  socialLinks.map((s) => attach("socials", socialItem(s)));
}

function attach(id, node) {
  let rootNode = createElement(node);
  document.getElementById(id).appendChild(rootNode);
}

export default app;
