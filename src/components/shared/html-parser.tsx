import parse from "html-react-parser"
import sanitizeHtml from 'sanitize-html'

export default function HTMLParser({html}: {html: string}) {
  return parse(sanitizeHtml(html))
}