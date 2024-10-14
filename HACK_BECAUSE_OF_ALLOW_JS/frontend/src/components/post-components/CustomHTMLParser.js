import { cn } from "@/lib/utils";
import parse, { domToReact } from "html-react-parser";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codepenEmbed } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { v4 as uuidv4 } from "uuid";
const CustomHtmlParser = ({ htmlContent }) => {
    const replace = (domNode) => {
        //   @ts-ignore
        if (domNode.name === "li" && domNode.parent) {
            return (<li key={uuidv4()} className={cn("list-inside indent-4", 
                // @ts-ignore
                domNode.parent?.name === "ul" ? "list-disc" : "list-decimal")}>
          {/* @ts-ignore */}
          {domToReact(domNode.children)}
        </li>);
        }
        //   @ts-ignore
        if (domNode.name === "blockquote") {
            return (<CustomBlockquote>
          {/* @ts-ignore */}
          {domToReact(domNode.children)}
        </CustomBlockquote>);
        }
        //   @ts-ignore
        if (domNode.name === "code" || domNode.name == "pre") {
            // @ts-ignore
            return <CustomCodeBlock>{domToReact(domNode.children)}</CustomCodeBlock>;
        }
        //   @ts-ignore
        if (domNode.name === "h2") {
            // @ts-ignore
            return <CustomHeader2>{domToReact(domNode.children)}</CustomHeader2>;
        }
        //   @ts-ignore
        if (domNode.name === "h1") {
            // @ts-ignore
            return <CustomHeader1>{domToReact(domNode.children)}</CustomHeader1>;
        }
    };
    return (<div className="prose">
      {parse(htmlContent, {
            replace,
        })}
    </div>);
};
export default CustomHtmlParser;
function CustomBlockquote({ children }) {
    return (<blockquote className="overflow-x-auto overflow-y-visible mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>);
}
function CustomCodeBlock({ children }) {
    return (<>
      {/* @ts-ignore */}
      <SyntaxHighlighter language="javascript" style={codepenEmbed}>
        {children}
      </SyntaxHighlighter>
    </>);
}
function CustomHeader2({ children }) {
    return <h2 className="text-2xl font-bold tracking-tight">{children}</h2>;
}
function CustomHeader1({ children }) {
    return <h1 className="pb-2 text-3xl font-bold tracking-tight">{children}</h1>;
}
