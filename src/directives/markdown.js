/* eslint-disable */
const rules=[
    [/#{6}\s?([^\n]+)\n/g, '<h6>$1</h6>'],
    [/#{5}\s?([^\n]+)\n/g, '<h5>$1</h5>'],
    [/#{4}\s?([^\n]+)\n/g, '<h4>$1</h4>'],
    [/#{3}\s?([^\n]+)\n/g, '<h3>$1</h3>'],
    [/#{2}\s?([^\n]+)\n/g, '<h2>$1</h2>'],
    [/#{1}\s?([^\n]+)\n/g, '<h1>$1</h1>'],
    [/\*{2}([^*]+)\*{2}/g, '<b>$1</b>'],
    [/\_([^*]+)\_/g, '<i>$1<i>'],
    [/\~{2}([^*]+)\~{2}/g, '<s>$1</s>'],
    [/\> (.*)+/gim, '<blockquote>$1</blockquote>'],
    [/```([^*]+)```/gim, '<code>$1</code>'],
    [/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />"],
    [/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>"],
    [/([^\n]+\n)/g, '<p>$1<p>']
];

export default{
    bind(el){
        console.log('el', el.textContent);
        let html = el.textContent;
        rules.forEach(([rule, template])=>{
            html = html.replace(rule, template);
        }
        )
        
        el.innerHTML=html;
    }
}