//react elemetn to render
const reactElement={
  type: 'a',
  props: {
    href:'https://google.com',
    target: '_blank'
  },
  children: 'click me to visite google'
}

function customrender(reactElement,mainContainer){
  const cust=document.createElement(reactElement.type)
  cust.innerHTML=reactElement.children

  for (const prop in reactElement.props) {
    if(prop==='children')continue
    cust.setAttribute(prop,reactElement.props[prop])
  }

  mainContainer.appendChild(cust)
}

 
const mainContainer=document.getElementById('root')
customrender(reactElement,mainContainer)

