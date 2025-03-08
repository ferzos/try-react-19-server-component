import React from 'react';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

const HtmlRenderPage = async () => {
  const posts = await fetch(`https://example.com/cache/posts.json`)
  const postsText = await posts.text()

  return <div>{parse(sanitizeHtml(postsText))}</div>
};

export default HtmlRenderPage;