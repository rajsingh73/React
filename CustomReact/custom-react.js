const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:'Please click here to visit google'
}
const ele=document.querySelector('#root');
function show(ele,reactelement){
    const newe=document.createElement(reactelement.type);
    newe.innerHTML=reactelement.children;
    for(prop in reactelement.props){
        newe.setAttribute(prop,reactelement.props[prop]);
    }
    ele.appendChild(newe);
}
show(ele,reactelement);
