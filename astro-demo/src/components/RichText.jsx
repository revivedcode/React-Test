import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS,INLINES } from '@contentful/rich-text-types';

export default function RichText({document}){
    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (
                <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 className="text-3xl font-semibold mt-5 mb-3">{children}</h2>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
                <a
                    href={node.data.uri}
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    {children}
                </a>
            ),
        },
    }
       return (
        <div>{documentToReactComponents(document, options)}</div>
    )
}