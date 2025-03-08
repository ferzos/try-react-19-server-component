import parse from 'html-react-parser';
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
      {parse(sanitizeHtml(content))}
    </div>
  )
};

export default HtmlRenderPage;