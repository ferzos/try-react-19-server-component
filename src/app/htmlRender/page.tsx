import React from 'react';
import sanitizeHtml from 'sanitize-html';
import htmr from 'htmr';

const HtmlRenderPage = async () => {
  const posts = await fetch(`https://example.com/cache/posts.json`)
  const postsText = await posts.text()

  return <div>{htmr(sanitizeHtml(postsText))}</div>;
};

export default HtmlRenderPage;