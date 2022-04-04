<template>
  <div class="container">
    <div class="row mt-4">
      <div class ="col text-center">
        <h1 class="light">Markdown Preview</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class ="col-md-6">
        <h4 class="light">Markdown</h4>
        <textarea
          class="info"
          v-model="markdown"
        />
      </div>
      <div class ="col-md-6">
        <h4 class="light">Preview</h4>
        <div 
          :key="markdown"
          class="info"
          v-markdown
        >
          {{markdown}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`,
    }
  }
}
</script>

<style>
textarea{
  resize: none; /*to get rid of the resize button on the bottom right*/
  border: 1px dashed orange;
  outline: none; /*so when click on it it doesn't show a border*/
  }
.info{
  height:400px;
  width:100%;
  background-color: rgba(255, 255, 255, 0.9)
}
</style>
