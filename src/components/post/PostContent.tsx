import React from 'react';
import parser from 'html-react-parser';

const PostContent = ({ data }) => {
  const renderBlock = ({type, data}) => {
    let content: string | JSX.Element = ""
    switch (type) {
      case "header":
        const element =  React.createElement(
          `h${data.level}`,
          {
            className: 'ce-header',
          },
          data.text
        )  
        content =    (<div style={{height: "fit-content"}}>
            {element}
          </div>)
      break;
      case "list":
        content = (<ul className={`"cdx-block" "cdx-list" "cdx-list--${data.style}"`}>
          {data.items.map(item =>  <li className="cdx-list__item">{item}</li>)}
        </ul>)
      break;
      case "embed":
          content = (<div className="cdx-block embed-tool">
          <iframe className="embed-tool__content" style={{width: "fit-100%"}} height="320"  width="580"
            src={data.embed}></iframe>
          <div style={{'textAlign': "center", 'marginTop': "5px"}}>{data.caption}</div>
          </div> )
      break;
      case "code":
        content = (<div className="cdx-block ce-code">
            <span style={{'textAlign': "right", 'marginBottom': "5px"}}>{data.language}</span>
            <pre className="ce-code__textarea cdx-input prettyprint"><code className="lang-js">{data.code+""}</code></pre>
          </div>)
      break;
      case "image":
          content = (
            <div className="cdx-block image-tool image-tool--filled">
              <div className="image-tool__image">
                <img className="image-tool__image-picture" src={data.file.url}></img>
                <span style={{'textAlign': "right", 'marginBottom': "5px"}}>{data.caption}</span>
              </div>
            </div>
          )
      break;
      default:
        content = (<div className="ce-paragraph cdx-block"> {parser(`${data.text}`)} </div>)
        break;
    }
    return (<div className="ce-block">
    <div className="ce-block__content">
      {content}
    </div>
  </div>)
  }

  return (
    data.blocks.map(block => renderBlock(block))
  );
}

export default PostContent;