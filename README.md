Course Notes
=====================================
JSX 
    - JSX and React are different,
    - JSX is not HTML in JS,
    - JSX is HTML/XML like Syntax,
    - Babel Transpile JSX.
    
    Create JSX
    ======================
        - syntax : const <jsx_name> = (<jsx_body>);
        - sample : const Title = (<h1 className="head">Hello from JSX</h1>);

    - We can use any javascript inside JSX by using {},
        Example :
            const Number = 1000;
            const Title = (<h1 className="head">{Number}</h1>);

React Compnent : Two Types
    - Class Based Component = OLD Way
    - Functional Component = New Way
        -> Defination : A function, which is returning JSX component is Functional Component

    Create Component
    ======================
        - syntax : const <component_name> = () => (<component_body>);
        - sample : const Title = () => (<h1 className="head">Hello from JSX</h1>);

    What is Component Composition ?
        - Component Composition is composing one react component to another react component
        - Use <another_component_name />
        - Sample :
            const Title = () => (<h1 className="head">Hello from JSX</h1>);
            const Heading = () => (<Title /><h1 className="head">Hello from JSX</h1>);



Questions 
=====================================
How are the other tags can be written in JSX

VSCODE Extension List
=====================================
Prettier
ESLint
Bracket Pair Colorization Toggler
Better Comments