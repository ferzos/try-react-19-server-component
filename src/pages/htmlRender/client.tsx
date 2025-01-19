import htmr from 'htmr';
import sanitizeHtml from 'sanitize-html';
import { useEffect, useState } from 'react';

const HtmlRenderPage = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch(`/api/posts`).then((data) => {
      return data.json()
    }).then(data =>
      setContent(data.message)
    );
  }, []);

  return (
    <div>
      {htmr(sanitizeHtml(content))}
    </div>
  )
};

export default HtmlRenderPage;