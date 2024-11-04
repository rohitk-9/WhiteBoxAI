import Markdown from "markdown-to-jsx";


const markdown = `# Hello, Markdown!

  ## Lists


  ### Ordered List

 1. Item 1

 2. Item 2

 3. Item 3


 ### Unordered List

 - Bullet 1

 - Bullet 2

   - Sub-bullet A

   - Sub-bullet B

 - Bullet 3`;

 const BlogRenderer = () => {

   return <Markdown>{markdown}</Markdown>;

 };


 export default BlogRenderer;